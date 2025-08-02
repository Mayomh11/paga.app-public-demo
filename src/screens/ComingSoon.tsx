import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Store, CreditCard, Globe, Users, Smartphone, Zap } from 'lucide-react';
import BetaWaitlistModal from '../components/BetaWaitlistModal';

const ComingSoon: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: MapPin,
      title: 'Cash-Out Locations',
      description: 'Partner with local shops and ATMs for easy cash withdrawal',
      status: 'Q2 2026',
      progress: 25
    },
    {
      icon: Store,
      title: 'Merchant Payments',
      description: 'Pay at stores, restaurants, and online with your PaGaME balance',
      status: 'Q3 2026',
      progress: 20
    },
    {
      icon: CreditCard,
      title: 'Virtual Cards',
      description: 'Generate virtual debit cards for online shopping worldwide',
      status: 'Q4 2026',
      progress: 15
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android apps with advanced features',
      status: 'Q1 2027',
      progress: 10
    },
    {
      icon: Globe,
      title: 'Multi-Country Launch',
      description: 'Expand to Mexico, Colombia, Guatemala, and more',
      status: 'Q2 2027',
      progress: 5
    },
    {
      icon: Users,
      title: 'Business Accounts',
      description: 'Special accounts for small businesses and freelancers',
      status: 'Q3 2027',
      progress: 5
    }
  ];

  const stats = [
    { label: 'Target Users', value: '1M+', icon: '👥' },
    { label: 'Countries', value: '10+', icon: '🌍' },
    { label: 'Partner Locations', value: '5,000+', icon: '🏪' },
    { label: 'Daily Transactions', value: '$50M+', icon: '💰' }
  ];

  return (
    <div className="coming-soon">
      <motion.div
        className="coming-soon-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="rocket-animation"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          🚀
        </motion.div>
        
        <h2>The Future of Global Payments</h2>
        <p>We're building the most comprehensive payment ecosystem for emerging markets</p>
      </motion.div>

      <div className="roadmap-section">
        <h3>Development Roadmap</h3>
        
        <div className="features-timeline">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="timeline-icon">
                <feature.icon size={24} />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>{feature.title}</h4>
                  <div className="timeline-status">{feature.status}</div>
                </div>
                
                <p>{feature.description}</p>
                
                <div className="progress-container">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${feature.progress}%` }}
                      transition={{ delay: (index * 0.1) + 0.5, duration: 1 }}
                    />
                  </div>
                  <span className="progress-text">{feature.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="vision-section">
        <h3>Our Vision for 2025</h3>
        
        <div className="vision-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="vision-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="vision-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            <strong>PaGaME will become the bridge between traditional finance and crypto</strong> for millions of people in emerging markets. Our platform will enable seamless money transfers, merchant payments, and financial services that work for everyone, regardless of their banking status.
          </p>
        </motion.div>
      </div>

      <div className="market-expansion">
        <h3>Market Expansion Plan</h3>
        
        <div className="expansion-map">
          <div className="expansion-phase phase-1">
            <h4>Phase 1: Caribbean Hub 🇩🇴</h4>
            <div className="phase-countries">
              <div className="country-flag">🇩🇴 Dominican Republic</div>
              <div className="country-flag">🇭🇹 Haiti</div>
              <div className="country-flag">🇯🇲 Jamaica</div>
            </div>
            <div className="phase-timeline">Q3 2026</div>
          </div>
          
          <div className="expansion-phase phase-2">
            <h4>Phase 2: Central America 🌎</h4>
            <div className="phase-countries">
              <div className="country-flag">🇲🇽 Mexico</div>
              <div className="country-flag">🇬🇹 Guatemala</div>
              <div className="country-flag">🇸🇻 El Salvador</div>
            </div>
            <div className="phase-timeline">Q1 2027</div>
          </div>
          
          <div className="expansion-phase phase-3">
            <h4>Phase 3: South America 🗺️</h4>
            <div className="phase-countries">
              <div className="country-flag">🇨🇴 Colombia</div>
              <div className="country-flag">🇻🇪 Venezuela</div>
              <div className="country-flag">🇵🇪 Peru</div>
            </div>
            <div className="phase-timeline">Q3 2027</div>
          </div>
        </div>
      </div>

      <motion.div
        className="beta-signup"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="beta-content">
          <Zap size={32} className="beta-icon" />
          <h3>Be Among the First</h3>
          <p>Join our beta program and help shape the future of global payments</p>
          
          <motion.button
            className="beta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            🚀 Join Beta Waitlist
          </motion.button>
          
          <div className="beta-benefits">
            <div className="benefit">✅ Early access to new features</div>
            <div className="benefit">✅ 100 free PAGA tokens</div>
            <div className="benefit">✅ Zero fees for first month</div>
            <div className="benefit">✅ Direct feedback line to founders</div>
          </div>
        </div>
      </motion.div>

      <div className="development-notice">
        <div className="notice-content">
          <div className="notice-icon">⚠️</div>
          <div>
            <strong>Development Preview</strong>
            <p>This demo showcases planned features. Actual implementation may vary based on user feedback and market conditions.</p>
          </div>
        </div>
      </div>
      
      <BetaWaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ComingSoon;