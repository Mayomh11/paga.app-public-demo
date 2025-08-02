import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Clock, Users, MousePointer } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface AnalyticsEvent {
  event: string;
  timestamp: number;
  data?: Record<string, any>;
  sessionId: string;
}

const AnalyticsDashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsEvent[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { getAnalytics, getSessionSummary, exportData } = useAnalytics();

  // Check for developer access - multiple methods
  React.useEffect(() => {
    // Method 1: Check for special URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const devMode = urlParams.get('dev') === 'mayo2024';
    
    // Method 2: Check for localStorage flag
    const devAccess = localStorage.getItem('pagame_dev_access') === 'mayo2024';
    
    // Method 3: Check for special key combination (Ctrl+Shift+A)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const password = prompt('Enter developer password:');
        if (password === 'mayo2024') {
          localStorage.setItem('pagame_dev_access', 'mayo2024');
          setIsAuthorized(true);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    if (devMode || devAccess) {
      setIsAuthorized(true);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnalytics(getAnalytics());
    }
  }, [isVisible]);

  const getScreenTimeStats = () => {
    const screenTimeEvents = analytics.filter(e => e.event === 'screen_time');
    const screenStats: Record<string, { totalTime: number, visits: number }> = {};

    screenTimeEvents.forEach(event => {
      const screen = event.data?.screen || 'unknown';
      const time = event.data?.timeSpent || 0;
      
      if (!screenStats[screen]) {
        screenStats[screen] = { totalTime: 0, visits: 0 };
      }
      
      screenStats[screen].totalTime += time;
      screenStats[screen].visits += 1;
    });

    return Object.entries(screenStats).map(([screen, stats]) => ({
      screen,
      averageTime: Math.round(stats.totalTime / stats.visits / 1000), // Convert to seconds
      totalTime: Math.round(stats.totalTime / 1000),
      visits: stats.visits
    })).sort((a, b) => b.totalTime - a.totalTime);
  };

  const getConversionFunnel = () => {
    const betaEvents = analytics.filter(e => e.event === 'beta_signup');
    const opened = betaEvents.filter(e => e.data?.step === 'opened').length;
    const submitted = betaEvents.filter(e => e.data?.step === 'submitted').length;
    const completed = betaEvents.filter(e => e.data?.step === 'completed').length;

    return { opened, submitted, completed };
  };

  const getTopInteractions = () => {
    const interactions = analytics.filter(e => e.event === 'button_click');
    const buttonStats: Record<string, number> = {};

    interactions.forEach(event => {
      const button = event.data?.button || 'unknown';
      buttonStats[button] = (buttonStats[button] || 0) + 1;
    });

    return Object.entries(buttonStats)
      .map(([button, count]) => ({ button, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  };

  const screenTimeStats = getScreenTimeStats();
  const conversionFunnel = getConversionFunnel();
  const topInteractions = getTopInteractions();
  const sessionSummary = getSessionSummary();

  // Don't show anything if not authorized
  if (!isAuthorized) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="analytics-trigger">
        <button 
          className="analytics-toggle"
          onClick={() => setIsVisible(true)}
          title="View Analytics Dashboard (Developer Only)"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          📊
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="analytics-dashboard"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className="analytics-header">
        <h2>📊 PaGaME Demo Analytics</h2>
        <div className="analytics-actions">
          <button onClick={exportData} className="export-btn">
            <Download size={16} />
            Export Data
          </button>
          <button onClick={() => setIsVisible(false)} className="close-btn">
            ✕
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        {/* Session Summary */}
        <div className="analytics-card">
          <div className="card-header">
            <Clock size={20} />
            <h3>Current Session</h3>
          </div>
          <div className="metrics">
            <div className="metric">
              <span className="metric-value">{Math.round(sessionSummary.duration / 1000)}s</span>
              <span className="metric-label">Duration</span>
            </div>
            <div className="metric">
              <span className="metric-value">{sessionSummary.eventCount}</span>
              <span className="metric-label">Events</span>
            </div>
          </div>
        </div>

        {/* Screen Time */}
        <div className="analytics-card">
          <div className="card-header">
            <Eye size={20} />
            <h3>Screen Time</h3>
          </div>
          <div className="screen-list">
            {screenTimeStats.slice(0, 5).map(stat => (
              <div key={stat.screen} className="screen-stat">
                <span className="screen-name">{stat.screen.replace('demo_', '')}</span>
                <span className="screen-time">{stat.averageTime}s avg</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="analytics-card">
          <div className="card-header">
            <Users size={20} />
            <h3>Beta Signup Funnel</h3>
          </div>
          <div className="funnel">
            <div className="funnel-step">
              <span className="step-label">Modal Opened</span>
              <span className="step-value">{conversionFunnel.opened}</span>
            </div>
            <div className="funnel-step">
              <span className="step-label">Form Submitted</span>
              <span className="step-value">{conversionFunnel.submitted}</span>
            </div>
            <div className="funnel-step">
              <span className="step-label">Completed</span>
              <span className="step-value">{conversionFunnel.completed}</span>
            </div>
          </div>
          {conversionFunnel.opened > 0 && (
            <div className="conversion-rate">
              <span>Conversion: {Math.round((conversionFunnel.completed / conversionFunnel.opened) * 100)}%</span>
            </div>
          )}
        </div>

        {/* Top Interactions */}
        <div className="analytics-card">
          <div className="card-header">
            <MousePointer size={20} />
            <h3>Top Interactions</h3>
          </div>
          <div className="interaction-list">
            {topInteractions.slice(0, 5).map(interaction => (
              <div key={interaction.button} className="interaction-stat">
                <span className="interaction-name">{interaction.button}</span>
                <span className="interaction-count">{interaction.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-footer">
        <p>Total Events: {analytics.length} | Privacy-friendly local storage</p>
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;