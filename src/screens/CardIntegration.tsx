import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Plus, CheckCircle, Zap, Lock } from 'lucide-react';

const CardIntegration: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddFunds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Show success longer
    }, 4000); // Take longer to process
  };

  return (
    <div className="card-integration">
      <div className="integration-header">
        <h2>Add Funds Instantly</h2>
        <p>Turn your card into global spending power</p>
      </div>

      <div className="integration-content">
        <div className="card-demo">
          <div className="wallet-balance">
            <div className="balance-header">
              <h3>Your PaGaME Balance</h3>
              <div className="balance-actions">
                <motion.button
                  className="add-funds-btn"
                  onClick={handleAddFunds}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  <Plus size={16} />
                  Add Funds
                </motion.button>
              </div>
            </div>
            
            <motion.div
              className="balance-amount"
              animate={showSuccess ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              $1,247.50
            </motion.div>
            
            <div className="balance-breakdown">
              <div className="balance-item">
                <span>💵 USD Stablecoin</span>
                <span>$1,247.50</span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="ramp-widget-demo"
              >
                <div className="widget-header">
                  <div className="widget-logo">
                    <Zap size={20} />
                    <span>Ramp Network</span>
                  </div>
                  <div className="widget-security">
                    <Lock size={16} />
                    <span>Secured</span>
                  </div>
                </div>

                <div className="widget-content">
                  <div className="purchase-details">
                    <div className="detail-row">
                      <span>You pay:</span>
                      <div className="pay-amount">
                        <span className="currency-flag">🇺🇸</span>
                        <span>$100.00 USD</span>
                      </div>
                    </div>
                    
                    <div className="conversion-arrow">↓</div>
                    
                    <div className="detail-row">
                      <span>You receive:</span>
                      <div className="receive-amount">
                        <span className="crypto-icon">💰</span>
                        <span>$99.75 USDC</span>
                      </div>
                    </div>
                  </div>

                  <div className="payment-methods">
                    <div className="method-option selected">
                      <CreditCard size={20} />
                      <span>Credit/Debit Card</span>
                      <div className="method-fee">2.5% fee</div>
                    </div>
                    
                    <div className="method-option">
                      <div className="apple-pay-icon">🍎</div>
                      <span>Apple Pay</span>
                      <div className="method-fee">2.5% fee</div>
                    </div>
                  </div>

                  <div className="loading-animation">
                    <motion.div
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⚡
                    </motion.div>
                    <p>Processing your purchase...</p>
                    <div className="loading-steps">
                      <div className="step completed">✅ Card verified</div>
                      <div className="step active">🔄 Converting to USDC</div>
                      <div className="step">⏳ Adding to wallet</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="success-notification"
              >
                <CheckCircle size={24} className="success-icon" />
                <div className="success-content">
                  <h4>Funds Added Successfully! 🎉</h4>
                  <p>$100.00 has been added to your wallet</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="integration-features">
          <h3>Why Use Card Integration?</h3>
          
          <div className="features-grid">
            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">⚡</div>
              <h4>Instant Conversion</h4>
              <p>Your card funds become crypto in seconds, ready to send anywhere</p>
            </motion.div>
            
            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">🔒</div>
              <h4>Bank-Grade Security</h4>
              <p>Your card details are encrypted and never stored on our servers</p>
            </motion.div>
            
            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">🌍</div>
              <h4>Global Coverage</h4>
              <p>Works with cards from 50+ countries, supporting local currencies</p>
            </motion.div>
            
            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">💸</div>
              <h4>Competitive Rates</h4>
              <p>Low 2.5% fee beats traditional money transfer services</p>
            </motion.div>
          </div>

          <div className="integration-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5%</div>
              <div className="stat-label">Card Processing Fee</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30s</div>
              <div className="stat-label">Average Processing Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIntegration;