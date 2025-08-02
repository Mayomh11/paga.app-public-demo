import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Share2, Download } from 'lucide-react';
import QRCode from 'qrcode';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const url = window.location.href;
      setCurrentUrl(url);
      
      // Generate QR code using the new library
      QRCode.toCanvas(canvasRef.current, url, {
        width: 200,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff'
        },
        errorCorrectionLevel: 'H'
      }).catch((err: any) => {
        console.error('QR Code generation failed:', err);
      });
    }
  }, [isOpen]);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'pagame-demo-qr.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  const shareUrl = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PaGaME Demo',
          text: 'Check out the PaGaME payment demo!',
          url: currentUrl,
        });
      } catch (err) {
        console.log('Sharing failed:', err);
        // Fallback to copying URL
        copyUrl();
      }
    } else {
      copyUrl();
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      // Could add a toast notification here
      console.log('URL copied to clipboard');
    });
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
            className="qr-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={20} />
            </button>

            <div className="qr-header">
              <Smartphone size={32} className="qr-icon" />
              <h2>Scan to Access on Mobile</h2>
              <p>Open your phone's camera and point it at the QR code</p>
            </div>

            <div className="qr-code-container">
              <canvas 
                ref={canvasRef} 
                width={200} 
                height={200}
                className="qr-canvas"
              />
              
              <div className="qr-logo-overlay">
                <div className="qr-logo">⚡</div>
              </div>
            </div>

            <div className="qr-actions">
              <button className="qr-action-btn" onClick={downloadQR}>
                <Download size={18} />
                <span>Download QR</span>
              </button>
              
              <button className="qr-action-btn" onClick={shareUrl}>
                <Share2 size={18} />
                <span>Share Link</span>
              </button>
            </div>

            <div className="qr-url">
              <div className="url-display">
                <span className="url-text">{currentUrl}</span>
                <button 
                  className="copy-btn"
                  onClick={copyUrl}
                  title="Copy URL"
                >
                  📋
                </button>
              </div>
            </div>

            <div className="qr-instructions">
              <div className="instruction-step">
                <span className="step-number">1</span>
                <span>Open your phone's camera app</span>
              </div>
              <div className="instruction-step">
                <span className="step-number">2</span>
                <span>Point camera at the QR code</span>
              </div>
              <div className="instruction-step">
                <span className="step-number">3</span>
                <span>Tap the notification to open</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QRCodeModal;