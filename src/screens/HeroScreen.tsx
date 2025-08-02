import React from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, Globe, DollarSign, Users } from 'lucide-react';
import { generateDominicanTransactions } from '../data/dominicanData';

const HeroScreen: React.FC = () => {
  const recentTransactions = generateDominicanTransactions().slice(0, 3);
  
  const formatAmount = (amount: number, currency: string, type: string) => {
    const prefix = type === 'sent' ? '-' : '+';
    if (currency === 'DOP') {
      return `${prefix}RD$${amount.toLocaleString()}`;
    }
    return `${prefix}$${amount.toFixed(2)}`;
  };
  
  const formatTransactionDescription = (transaction: any) => {
    if (transaction.type === 'sent' && transaction.to) {
      return `Sent to ${transaction.to.name.split(' ')[0]}`;
    }
    if (transaction.type === 'received' && transaction.from) {
      return `From ${transaction.from.name.split(' ')[0]}`;
    }
    if (transaction.merchant) {
      return transaction.merchant;
    }
    return transaction.description;
  };
  
  return (
    <div className="hero-screen">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Send Money Like Lightning ⚡</h1>
          <p className="hero-subtitle">
            From New York to Santo Domingo in <span className="highlight">2 seconds</span>
          </p>
        </motion.div>

        <motion.div
          className="value-props"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="value-prop">
            <Clock className="prop-icon" />
            <div>
              <h3>2 Second Transfers</h3>
              <p>Instant settlement worldwide</p>
            </div>
          </div>
          
          <div className="value-prop">
            <DollarSign className="prop-icon" />
            <div>
              <h3>$0.001 Fees</h3>
              <p>99% cheaper than banks</p>
            </div>
          </div>
          
          <div className="value-prop">
            <Globe className="prop-icon" />
            <div>
              <h3>Global Access</h3>
              <p>Send anywhere, anytime</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="demo-preview"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-bar">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="signal-icons">📶 📶 🔋</div>
                </div>
                <div className="app-header">
                  <h2>PaGaME</h2>
                  <div className="balance">$1,247.50</div>
                </div>
              </div>
              
              <div className="quick-actions">
                <motion.div
                  className="action-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                  <span>Send Money</span>
                </motion.div>
                
                <motion.div
                  className="action-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={20} />
                  <span>Request</span>
                </motion.div>
              </div>

              <div className="recent-activity">
                <h3>Recent Activity</h3>
                {recentTransactions.map((transaction, index) => (
                  <div key={transaction.id} className="activity-item">
                    <div className="activity-icon">
                      {transaction.type === 'sent' ? '💸' : 
                       transaction.type === 'received' ? '💰' : '💳'}
                    </div>
                    <div className="activity-details">
                      <div>{formatTransactionDescription(transaction)}</div>
                      <div className="activity-amount">
                        {formatAmount(transaction.amount, transaction.currency, transaction.type)}
                      </div>
                    </div>
                    <div className="activity-status">✅ {index + 1}s</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="market-focus"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="market-stats">
            <div className="stat-item">
              <div className="stat-flag">🇺🇸</div>
              <div>
                <div className="stat-number">2.3M</div>
                <div className="stat-label">Dominican Americans</div>
              </div>
            </div>
            
            <div className="stat-arrow">→</div>
            
            <div className="stat-item">
              <div className="stat-flag">🇩🇴</div>
              <div>
                <div className="stat-number">$10.9B</div>
                <div className="stat-label">Annual Remittances</div>
              </div>
            </div>
          </div>
          
          <p className="market-tagline">
            <strong>Traditional remittances take 3-5 days and cost 8-15%.</strong><br/>
            PaGaME does it in 2 seconds for 0.001%.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroScreen;