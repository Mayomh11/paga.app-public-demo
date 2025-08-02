import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { dominicanUsers } from '../data/dominicanData';

const PaymentFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedRecipient, setSelectedRecipient] = useState(dominicanUsers[0]);
  
  const steps = [
    { id: 'recipient', title: 'Choose Recipient', icon: User },
    { id: 'amount', title: 'Enter Amount', icon: DollarSign },
    { id: 'confirm', title: 'Confirm Transfer', icon: Send },
    { id: 'success', title: 'Money Sent!', icon: CheckCircle }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 6000); // Slower: 6 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="payment-flow">
      <div className="flow-header">
        <h2>Send Money Instantly</h2>
        <p>Watch how easy it is to send money worldwide</p>
        
        <div className="step-indicators">
          {steps.map((stepInfo, index) => (
            <div
              key={stepInfo.id}
              className={`step-indicator ${index <= step ? 'active' : ''} ${index === step ? 'current' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <span>{stepInfo.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flow-content">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="recipient"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="flow-step"
            >
              <div className="step-icon">
                <User size={32} />
              </div>
              <h3>Choose Recipient</h3>
              
              <div className="contacts-list">
                {dominicanUsers.slice(0, 4).map((user, index) => (
                  <motion.div
                    key={user.id}
                    className={`contact-item ${index === 0 ? 'selected' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedRecipient(user)}
                  >
                    <div className="contact-avatar">{user.avatar}</div>
                    <div className="contact-info">
                      <div className="contact-name">{user.name}</div>
                      <div className="contact-location">{user.location}</div>
                    </div>
                    {user.status === 'active' && (
                      <div className="contact-status">
                        <div className="status-dot active"></div>
                        <span>Active</span>
                      </div>
                    )}
                    {user.status === 'away' && (
                      <div className="contact-status">
                        <div className="status-dot away"></div>
                        <span>Away</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="amount"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="flow-step"
            >
              <div className="step-icon">
                <DollarSign size={32} />
              </div>
              <h3>Enter Amount</h3>
              
              <div className="amount-input">
                <div className="currency-selector">
                  <span className="currency-flag">🇺🇸</span>
                  <span>USD</span>
                </div>
                <motion.div
                  className="amount-display"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  $150.00
                </motion.div>
              </div>
              
              <div className="recipient-preview">
                <ArrowRight size={20} />
                <div className="recipient-info">
                  <div className="recipient-name">{selectedRecipient.name}</div>
                  <div className="recipient-amount">
                    Receives: <strong>$149.99</strong> (Fee: $0.001)
                  </div>
                </div>
              </div>
              
              <div className="quick-amounts">
                {[25, 50, 100, 200].map(amount => (
                  <motion.button
                    key={amount}
                    className={`quick-amount ${amount === 150 ? 'selected' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="flow-step"
            >
              <div className="step-icon">
                <Send size={32} />
              </div>
              <h3>Confirm Transfer</h3>
              
              <div className="transfer-summary">
                <div className="summary-row">
                  <span>To:</span>
                  <div className="recipient-detail">
                    <span>{selectedRecipient.avatar} {selectedRecipient.name}</span>
                    <span className="location">{selectedRecipient.location}</span>
                  </div>
                </div>
                
                <div className="summary-row">
                  <span>Amount:</span>
                  <span className="amount">$150.00</span>
                </div>
                
                <div className="summary-row">
                  <span>Fee:</span>
                  <span className="fee">$0.001</span>
                </div>
                
                <div className="summary-row total">
                  <span>Total:</span>
                  <span className="total-amount">$150.001</span>
                </div>
                
                <div className="summary-row">
                  <span>Delivery:</span>
                  <span className="delivery-time">
                    <Clock size={16} />
                    ~2 seconds
                  </span>
                </div>
              </div>
              
              <motion.button
                className="confirm-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Send size={20} />
                Send Money Now
              </motion.button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flow-step success"
            >
              <motion.div
                className="success-animation"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <CheckCircle size={64} className="success-icon" />
              </motion.div>
              
              <h3>Money Sent Successfully! 🎉</h3>
              
              <div className="success-details">
                <div className="success-stat">
                  <div className="stat-value">2.1s</div>
                  <div className="stat-label">Delivery Time</div>
                </div>
                
                <div className="success-stat">
                  <div className="stat-value">$0.001</div>
                  <div className="stat-label">Transaction Fee</div>
                </div>
                
                <div className="success-stat">
                  <div className="stat-value">✅</div>
                  <div className="stat-label">Confirmed</div>
                </div>
              </div>
              
              <div className="transaction-id">
                <span>Transaction ID: </span>
                <code>PGM-2024-ABC123XYZ</code>
              </div>
              
              <p className="success-message">
                {selectedRecipient.name.split(' ')[0]} will receive <strong>$149.99</strong> in their PaGaME wallet instantly!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaymentFlow;