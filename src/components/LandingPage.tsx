/*
 * PaGaME - Payment Application Demo
 * © 2024 Mayomh11. All Rights Reserved.
 * 
 * This code is proprietary and confidential. Unauthorized copying,
 * distribution, modification, or use is strictly prohibited.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, DollarSign, Users, TrendingUp, Star, PlayCircle, QrCode, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import QRCodeModal from './QRCodeModal';
import BetaWaitlistModal from './BetaWaitlistModal';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  return (
    <div className="landing-page">
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
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star size={16} />
            <span>In Development • By Mayomh11</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Send Money Like Lightning ⚡
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The future of global payments is here. Send money from New York to Santo Domingo in <span className="highlight">2 seconds</span> for <span className="highlight">$0.001</span>.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="stat-item">
              <div className="stat-flag">🇺🇸➡️🇩🇴</div>
              <div className="stat-info">
                <div className="stat-number">2.4M</div>
                <div className="stat-label">Dominican Americans</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-flag">💰</div>
              <div className="stat-info">
                <div className="stat-number">$10.8B</div>
                <div className="stat-label">2024 Remittances</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-flag">⚡</div>
              <div className="stat-info">
                <div className="stat-number">2s</div>
                <div className="stat-label">Transfer Time</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="demo-buttons">
              <button
                className="demo-button primary"
                onClick={() => navigate('/demo')}
              >
                <PlayCircle size={20} />
                <span>View Interactive Demo</span>
                <ArrowRight size={16} />
              </button>
              
              <button
                className="demo-button beta"
                onClick={() => setIsBetaModalOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                  color: 'white',
                  border: 'none'
                }}
              >
                <Mail size={20} />
                <span>Join Beta List</span>
                <ArrowRight size={16} />
              </button>
              
              <button
                className="demo-button secondary"
                onClick={() => setIsQRModalOpen(true)}
                title="Get QR code for mobile access"
              >
                <QrCode size={20} />
                <span>Mobile Access</span>
              </button>
            </div>
            
            <div className="demo-info">
              <span>🎮 5 interactive screens showcasing the future of payments</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="payment-demo-card">
            <div className="demo-header">
              <h3>Live Payment Demo</h3>
              <div className="demo-status">
                <div className="status-dot pulsing"></div>
                <span>Real-time Demo</span>
              </div>
            </div>
            
            <div className="demo-flow">
              <div className="demo-step">
                <div className="step-icon">👩‍💼</div>
                <div className="step-info">
                  <div className="step-name">Maria Rodriguez</div>
                  <div className="step-location">🇩🇴 Santo Domingo</div>
                </div>
                <div className="step-amount">$150.00</div>
              </div>
              
              <div className="flow-arrow">↓</div>
              
              <div className="demo-metrics">
                <div className="metric">
                  <span className="metric-label">Fee:</span>
                  <span className="metric-value">$0.001</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Time:</span>
                  <span className="metric-value">2.1s</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Status:</span>
                  <span className="metric-value success">✅ Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="section-content">
          <motion.div
            className="problem-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>The $686 Billion Problem</h2>
            <p>Traditional remittances are broken. Families pay too much and wait too long.</p>
          </motion.div>

          <div className="comparison-table">
            <motion.div
              className="comparison-card traditional"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="card-header">
                <h3>❌ Traditional Way</h3>
                <div className="card-subtitle">Western Union, MoneyGram, Banks</div>
              </div>
              <div className="comparison-metrics">
                <div className="metric bad">
                  <div className="metric-label">Fees</div>
                  <div className="metric-value">8-15%</div>
                </div>
                <div className="metric bad">
                  <div className="metric-label">Time</div>
                  <div className="metric-value">3-5 days</div>
                </div>
                <div className="metric bad">
                  <div className="metric-label">Requirements</div>
                  <div className="metric-value">Bank account, ID, forms</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="comparison-card pagame"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="card-header">
                <h3>✅ PaGaME Way</h3>
                <div className="card-subtitle">Powered by Solana blockchain</div>
              </div>
              <div className="comparison-metrics">
                <div className="metric good">
                  <div className="metric-label">Fees</div>
                  <div className="metric-value">0.001%</div>
                </div>
                <div className="metric good">
                  <div className="metric-label">Time</div>
                  <div className="metric-value">2 seconds</div>
                </div>
                <div className="metric good">
                  <div className="metric-label">Requirements</div>
                  <div className="metric-value">Just a phone</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="section-content">
          <motion.div
            className="vision-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Our Vision for 2027</h2>
            <p>Building the financial infrastructure for emerging markets</p>
          </motion.div>

          <div className="vision-roadmap">
            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="roadmap-icon">🌎</div>
              <div className="roadmap-content">
                <h3>10+ Countries</h3>
                <p>Starting with Dominican Republic, expanding across Latin America and the Caribbean</p>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="roadmap-icon">👥</div>
              <div className="roadmap-content">
                <h3>1M+ Users</h3>
                <p>Serving millions of families with instant, affordable money transfers</p>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="roadmap-icon">🏪</div>
              <div className="roadmap-content">
                <h3>5,000+ Locations</h3>
                <p>Partner with local shops and ATMs for easy cash withdrawal</p>
              </div>
            </motion.div>

            <motion.div
              className="roadmap-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="roadmap-icon">💰</div>
              <div className="roadmap-content">
                <h3>$50M+ Daily</h3>
                <p>Processing millions in transactions every day across our network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="section-content">
          <motion.div
            className="tech-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Built on Solana</h2>
            <p>The fastest, most cost-effective blockchain for global payments</p>
          </motion.div>

          <div className="tech-features">
            <motion.div
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Zap className="tech-icon" />
              <h3>Lightning Fast</h3>
              <p>2-second settlement times make PaGaME faster than credit cards</p>
            </motion.div>

            <motion.div
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <DollarSign className="tech-icon" />
              <h3>Ultra Low Cost</h3>
              <p>$0.001 transaction fees - 99% cheaper than traditional remittances</p>
            </motion.div>

            <motion.div
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Globe className="tech-icon" />
              <h3>Global Scale</h3>
              <p>Built to handle millions of transactions across dozens of countries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2>Ready to See the Future?</h2>
          <p>Experience PaGaME's revolutionary payment system in our interactive demo</p>
          
          <button
            className="demo-button large"
            onClick={() => navigate('/demo')}
          >
            <PlayCircle size={24} />
            <span>Launch Interactive Demo</span>
            <ArrowRight size={20} />
          </button>
          
          <div className="cta-features">
            <div className="feature">
              <TrendingUp size={16} />
              <span>Live payment simulation</span>
            </div>
            <div className="feature">
              <Users size={16} />
              <span>Rewards system preview</span>
            </div>
            <div className="feature">
              <Zap size={16} />
              <span>Card integration demo</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>⚡ PaGaME</h3>
            <p>The future of global payments</p>
          </div>
          
          <div className="footer-info">
            <div className="footer-item">
              <strong>Created by:</strong>
              <span>Mayomh11</span>
            </div>
            <div className="footer-item">
              <strong>Status:</strong>
              <span>In Development</span>
            </div>
            <div className="footer-item">
              <strong>Target Launch:</strong>
              <span>Q3 2026</span>
            </div>
          </div>
          
          <div className="footer-sources">
            <div className="sources-title">Data Sources:</div>
            <div className="sources-list">
              <span>• Dominican population: Migration Policy Institute 2024</span>
              <span>• Remittances: Central Bank of Dominican Republic 2024</span>
              <span>• Market analysis: World Bank & Inter-American Development Bank</span>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="copyright-line">
              <span>© 2024 Mayomh11. All Rights Reserved.</span>
              <span>PaGaME™ is a trademark of Mayomh11.</span>
            </div>
            <div className="protection-notice">
              🔒 Proprietary software. Unauthorized copying, distribution, or commercial use is strictly prohibited.
            </div>
            <div className="demo-notice">
              ⚠️ Demo version only. Not for commercial use. All features subject to change.
            </div>
          </div>
        </div>
      </footer>
      
      <QRCodeModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
      />
      
      <BetaWaitlistModal 
        isOpen={isBetaModalOpen} 
        onClose={() => setIsBetaModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;