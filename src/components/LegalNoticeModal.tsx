/*
 * PaGaME - Legal Notice Modal
 * © 2024 Mayomh11. All Rights Reserved.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Check } from 'lucide-react';

const LegalNoticeModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted terms
    const hasAcceptedTerms = localStorage.getItem('pagame_legal_accepted');
    if (!hasAcceptedTerms) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pagame_legal_accepted', 'true');
    localStorage.setItem('pagame_acceptance_date', new Date().toISOString());
    setHasAccepted(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    alert('You must accept the terms to access this demo.');
    window.location.href = 'https://google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="legal-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <motion.div
            className="legal-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              border: '3px solid #ff6b6b'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Shield size={48} style={{ color: '#ff6b6b', marginBottom: '16px' }} />
              <h2 style={{ color: '#333', fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>
                🔒 Legal Notice & Terms of Access
              </h2>
              <p style={{ color: '#666', fontSize: '16px', margin: 0 }}>
                <strong>© 2024 Mayomh11. All Rights Reserved.</strong>
              </p>
            </div>

            <div style={{ 
              background: '#fff5f5', 
              border: '2px solid #fed7d7', 
              borderRadius: '12px', 
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertTriangle size={24} style={{ color: '#e53e3e', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ color: '#e53e3e', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>
                    IMPORTANT: By accessing this page, you agree that:
                  </h3>
                  <ul style={{ color: '#333', fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                    <li><strong>NO COPYING:</strong> You will not copy, screenshot, or reproduce any code, designs, or content</li>
                    <li><strong>NO STEALING:</strong> You will not use any concepts, features, or designs for your own projects</li>
                    <li><strong>NO DISTRIBUTION:</strong> You will not share, distribute, or make available any part of this demo</li>
                    <li><strong>NO REVERSE ENGINEERING:</strong> You will not attempt to extract, analyze, or replicate functionality</li>
                    <li><strong>DEMO ONLY:</strong> This is for viewing purposes only - not for commercial use</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ 
              background: '#f7fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '8px', 
              padding: '16px',
              marginBottom: '24px'
            }}>
              <p style={{ fontSize: '13px', color: '#4a5568', margin: 0, lineHeight: '1.5' }}>
                <strong>PaGaME™</strong> is proprietary software owned by Mayomh11. 
                Unauthorized use violates intellectual property laws and may result in legal action. 
                Your access is logged and monitored.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <motion.button
                onClick={handleAccept}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Check size={20} />
                I Accept These Terms
              </motion.button>

              <motion.button
                onClick={handleReject}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#e2e8f0',
                  color: '#4a5568',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Decline & Exit
              </motion.button>
            </div>

            <p style={{ 
              fontSize: '11px', 
              color: '#a0aec0', 
              textAlign: 'center', 
              margin: '16px 0 0 0',
              lineHeight: '1.4'
            }}>
              By clicking "I Accept", you acknowledge that you have read and agree to be bound by these terms. 
              Violation may result in immediate access termination and legal consequences.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalNoticeModal;