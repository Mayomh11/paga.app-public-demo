import { useEffect, useRef } from 'react';

export interface AnalyticsEvent {
  event: string;
  timestamp: number;
  data?: Record<string, any>;
  sessionId: string;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private sessionStartTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.sessionStartTime = Date.now();
    this.initializeSession();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeSession() {
    this.track('session_start', {
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      referrer: document.referrer,
      url: window.location.href
    });
  }

  track(event: string, data?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      timestamp: Date.now(),
      data,
      sessionId: this.sessionId
    };

    this.events.push(analyticsEvent);
    console.log('📊 Analytics:', analyticsEvent);

    // Store in localStorage for persistence
    this.saveToStorage();
  }

  private saveToStorage() {
    try {
      const existingData = localStorage.getItem('pagame_analytics') || '[]';
      const allEvents = JSON.parse(existingData);
      
      // Keep only last 1000 events to prevent storage bloat
      const updatedEvents = [...allEvents, ...this.events].slice(-1000);
      
      localStorage.setItem('pagame_analytics', JSON.stringify(updatedEvents));
      this.events = []; // Clear current session events after saving
    } catch (error) {
      console.warn('Failed to save analytics to localStorage:', error);
    }
  }

  getAnalytics() {
    try {
      const stored = localStorage.getItem('pagame_analytics') || '[]';
      return JSON.parse(stored) as AnalyticsEvent[];
    } catch {
      return [];
    }
  }

  getSessionSummary() {
    const events = this.getAnalytics();
    const sessionEvents = events.filter(e => e.sessionId === this.sessionId);
    
    return {
      sessionId: this.sessionId,
      duration: Date.now() - this.sessionStartTime,
      eventCount: sessionEvents.length,
      events: sessionEvents
    };
  }

  // Export data for analysis
  exportData() {
    const data = {
      analytics: this.getAnalytics(),
      exported_at: new Date().toISOString(),
      session_summary: this.getSessionSummary()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pagame_analytics_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// Singleton instance
const analytics = new AnalyticsManager();

// Custom hook for using analytics
export const useAnalytics = () => {
  const trackEvent = (event: string, data?: Record<string, any>) => {
    analytics.track(event, data);
  };

  const trackPageView = (page: string) => {
    analytics.track('page_view', { page, url: window.location.href });
  };

  const trackScreenTime = (screen: string, timeSpent: number) => {
    analytics.track('screen_time', { screen, timeSpent });
  };

  const trackButtonClick = (button: string, location?: string) => {
    analytics.track('button_click', { button, location });
  };

  const trackDemoInteraction = (action: string, screen?: string, details?: any) => {
    analytics.track('demo_interaction', { action, screen, ...details });
  };

  const trackBetaSignup = (step: 'opened' | 'submitted' | 'completed', email?: string) => {
    analytics.track('beta_signup', { 
      step, 
      email: email ? 'provided' : undefined // Don't store actual email for privacy
    });
  };

  const getAnalytics = () => analytics.getAnalytics();
  const getSessionSummary = () => analytics.getSessionSummary();
  const exportData = () => analytics.exportData();

  return {
    trackEvent,
    trackPageView,
    trackScreenTime,
    trackButtonClick,
    trackDemoInteraction,
    trackBetaSignup,
    getAnalytics,
    getSessionSummary,
    exportData
  };
};

// Screen time tracker hook
export const useScreenTimeTracker = (screenName: string) => {
  const startTimeRef = useRef<number>(Date.now());
  const { trackScreenTime } = useAnalytics();

  useEffect(() => {
    startTimeRef.current = Date.now();

    return () => {
      const timeSpent = Date.now() - startTimeRef.current;
      trackScreenTime(screenName, timeSpent);
    };
  }, [screenName, trackScreenTime]);
};

export default analytics;