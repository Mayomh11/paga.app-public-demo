import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, AlertCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
import { addToBetaWaitlist } from '../lib/supabase';

interface BetaWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaWaitlistModal: React.FC<BetaWaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { trackBetaSignup } = useAnalytics();

  // Track when modal opens
  useEffect(() => {
    if (isOpen) {
      trackBetaSignup('opened');
    }
  }, [isOpen, trackBetaSignup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    trackBetaSignup('submitted', email);
    setIsLoading(true);
    setError(null);
    
    try {
      // Actually save to Supabase
      await addToBetaWaitlist(email);
      
      setIsLoading(false);
      setIsSubmitted(true);
      trackBetaSignup('completed', email);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message || 'Failed to join waitlist. Please try again.');
      console.error('Beta signup error:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="beta-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <h2>🚀 Join 10,000+ People Waiting for PaGaME</h2>
                </div>

                <div className="modal-benefits">
                  <h3>What you'll get:</h3>
                  <div className="benefit-list">
                    <div className="benefit-item">
                      <Check size={16} />
                      <span>Early beta access</span>
                    </div>
                    <div className="benefit-item">
                      <Check size={16} />
                      <span>Exclusive updates</span>
                    </div>
                    <div className="benefit-item">
                      <Check size={16} />
                      <span>Priority customer support</span>
                    </div>
                    <div className="benefit-item">
                      <Check size={16} />
                      <span>Special launch pricing</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="email-input-group">
                    <Mail size={20} />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  {error && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="modal-actions">
                    <button 
                      type="submit" 
                      className="join-waitlist-btn"
                      disabled={isLoading || !email.trim()}
                    >
                      {isLoading ? 'Joining...' : 'Join the Revolution'}
                    </button>
                    <button type="button" className="modal-cancel" onClick={onClose}>
                      Close
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">✅</div>
                <h2>Welcome to the revolution!</h2>
                <p>You're now on the beta waitlist. We'll notify you as soon as early access opens.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BetaWaitlistModal;