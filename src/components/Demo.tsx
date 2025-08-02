/*
 * PaGaME - Interactive Demo Component
 * © 2024 Mayomh11. All Rights Reserved.
 * 
 * Proprietary demo software. Unauthorized use prohibited.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, DollarSign, Star } from 'lucide-react';
import { useAnalytics, useScreenTimeTracker } from '../hooks/useAnalytics';

// Demo Screens
import HeroScreen from '../screens/HeroScreen';
import PaymentFlow from '../screens/PaymentFlow';
import CardIntegration from '../screens/CardIntegration';
import RewardsTeaser from '../screens/RewardsTeaser';
import ComingSoon from '../screens/ComingSoon';
import AnalyticsDashboard from './AnalyticsDashboard';

interface Screen {
  id: string;
  name: string;
  component: React.ComponentType;
  description: string;
}

const screens: Screen[] = [
  { id: 'hero', name: 'Hero', component: HeroScreen, description: 'Revolutionary payments for everyone' },
  { id: 'payment', name: 'Send Money', component: PaymentFlow, description: 'Instant transfers worldwide' },
  { id: 'card', name: 'Add Funds', component: CardIntegration, description: 'Card to crypto in seconds' },
  { id: 'rewards', name: 'Earn Rewards', component: RewardsTeaser, description: 'Get rewarded for every payment' },
  { id: 'future', name: 'Coming Soon', component: ComingSoon, description: 'The future of payments' }
];

const Demo: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const { trackPageView, trackDemoInteraction, trackButtonClick } = useAnalytics();
  
  // Track screen time for current screen
  useScreenTimeTracker(`demo_${screens[currentScreen]?.id || 'unknown'}`);

  // Track demo page view on mount
  useEffect(() => {
    trackPageView('demo');
  }, [trackPageView]);

  // Track screen changes
  useEffect(() => {
    trackDemoInteraction('screen_change', screens[currentScreen].id, {
      screenName: screens[currentScreen].name,
      screenIndex: currentScreen,
      isAutoPlay: isAutoPlaying
    });
  }, [currentScreen, trackDemoInteraction, isAutoPlaying]);

  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentScreen((prev) => (prev + 1) % screens.length);
      }, 8000); // Much slower: 8 seconds per screen
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const CurrentComponent = screens[currentScreen].component;

  return (
    <div className="app">
      {/* Legal Notice Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '13px',
        borderBottom: '2px solid #ff6b6b'
      }}>
        🔒 <strong>PROPRIETARY DEMO</strong> - © 2024 Mayomh11 - Unauthorized copying, distribution, or commercial use prohibited
      </div>
      
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <motion.div
              className="logo-icon"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
            <h1>
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                PaGaME
              </a>
            </h1>
          </div>
          
          <div className="header-info">
            <motion.button
              className="back-home-btn"
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                marginRight: '16px'
              }}
            >
              ← Back to Home
            </motion.button>
            <div className="status-badge">
              <div className="status-dot" />
              In Development
            </div>
            <div className="creator-info">
              By Mayomh11
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="screen-nav">
        <div className="nav-content">
          <div className="screen-indicators">
            {screens.map((screen, index) => (
              <motion.button
                key={screen.id}
                className={`screen-indicator ${index === currentScreen ? 'active' : ''}`}
                onClick={() => {
                  setCurrentScreen(index);
                  trackButtonClick(`nav_${screen.id}`, 'demo_navigation');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="indicator-dot" />
                <span>{screen.name}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="nav-controls">
            <button
              className={`auto-play-btn ${isAutoPlaying ? 'active' : ''}`}
              onClick={() => {
                const newState = !isAutoPlaying;
                setIsAutoPlaying(newState);
                trackButtonClick('auto_play', 'demo_controls');
              }}
            >
              {isAutoPlaying ? '⏸️' : '▶️'} Auto Play
            </button>
          </div>
        </div>
      </nav>

      {/* Main Screen Area */}
      <main className="screen-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="screen-content"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>

        {/* Screen Info */}
        <div className="screen-info">
          <h3>{screens[currentScreen].name}</h3>
          <p>{screens[currentScreen].description}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-arrow nav-prev"
          onClick={() => setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)}
          disabled={currentScreen === 0}
        >
          <div className="arrow-icon">
            <div className="arrow-line"></div>
            <div className="arrow-head left"></div>
          </div>
        </button>
        <button
          className="nav-arrow nav-next"
          onClick={() => setCurrentScreen((prev) => (prev + 1) % screens.length)}
          disabled={currentScreen === screens.length - 1}
        >
          <div className="arrow-icon">
            <div className="arrow-line"></div>
            <div className="arrow-head right"></div>
          </div>
        </button>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="demo-notice">
            <Star className="star-icon" />
            <span>This is a development preview. Full app coming soon!</span>
          </div>
          
          <div className="quick-stats">
            <div className="stat">
              <Zap className="stat-icon" />
              <span>2 Second Transfers</span>
            </div>
            <div className="stat">
              <DollarSign className="stat-icon" />
              <span>$0.001 Fees</span>
            </div>
            <div className="stat">
              <Globe className="stat-icon" />
              <span>Global Access</span>
            </div>
          </div>
        </div>
      </footer>
      
      <AnalyticsDashboard />
    </div>
  );
};

export default Demo;