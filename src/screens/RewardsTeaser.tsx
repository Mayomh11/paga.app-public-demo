import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, Crown } from 'lucide-react';
import { dominicanUsers } from '../data/dominicanData';

const RewardsTeaser: React.FC = () => {
  const [activeTab, setActiveTab] = useState('earn');

  const tabs = [
    { id: 'earn', label: 'Earn Rewards', icon: Star },
    { id: 'levels', label: 'VIP Levels', icon: Crown },
    { id: 'referrals', label: 'Invite Friends', icon: Users }
  ];

  return (
    <div className="rewards-teaser">
      <div className="rewards-header">
        <motion.div
          className="rewards-icon"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎁
        </motion.div>
        <h2>Get Rewarded for Every Payment</h2>
        <p>Earn PAGA tokens and unlock exclusive benefits</p>
      </div>

      <div className="rewards-navigation">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon size={20} />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="rewards-content">
        <AnimatePresence mode="wait">
          {activeTab === 'earn' && (
            <motion.div
              key="earn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rewards-tab"
            >
              <div className="earning-opportunities">
                <div className="earning-card primary">
                  <div className="earning-icon">💸</div>
                  <div className="earning-details">
                    <h3>Transaction Rewards</h3>
                    <p>Earn 1% back in PAGA tokens on every payment</p>
                    <div className="earning-example">
                      Send $100 → Earn 1 PAGA (~$1.00)
                    </div>
                  </div>
                  <div className="earning-multiplier">1x</div>
                </div>

                <div className="earning-card">
                  <div className="earning-icon">👥</div>
                  <div className="earning-details">
                    <h3>Referral Bonuses</h3>
                    <p>Get 50 PAGA when friends join and make their first payment</p>
                    <div className="earning-example">
                      Invite 5 friends → Earn 250 PAGA (~$250)
                    </div>
                  </div>
                  <div className="earning-multiplier">50x</div>
                </div>

                <div className="earning-card">
                  <div className="earning-icon">🔥</div>
                  <div className="earning-details">
                    <h3>Streak Bonuses</h3>
                    <p>Daily usage streaks multiply your rewards</p>
                    <div className="earning-example">
                      7-day streak → 2x all rewards
                    </div>
                  </div>
                  <div className="earning-multiplier">2x</div>
                </div>
              </div>

              <div className="paga-token-info">
                <div className="token-stats">
                  <div className="token-stat">
                    <div className="stat-icon">⚡</div>
                    <div>
                      <div className="stat-value">PAGA</div>
                      <div className="stat-label">Reward Token</div>
                    </div>
                  </div>
                  
                  <div className="token-stat">
                    <div className="stat-icon">💰</div>
                    <div>
                      <div className="stat-value">~$1.00</div>
                      <div className="stat-label">Current Value</div>
                    </div>
                  </div>
                  
                  <div className="token-stat">
                    <div className="stat-icon">📈</div>
                    <div>
                      <div className="stat-value">+25%</div>
                      <div className="stat-label">Monthly Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'levels' && (
            <motion.div
              key="levels"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rewards-tab"
            >
              <div className="vip-levels">
                <div className="level-card bronze">
                  <div className="level-badge">🥉</div>
                  <h3>Bronze</h3>
                  <div className="level-requirement">0 - 99 PAGA</div>
                  <div className="level-benefits">
                    <div className="benefit">✅ Basic rewards</div>
                    <div className="benefit">✅ Standard support</div>
                    <div className="benefit">✅ Transaction history</div>
                  </div>
                </div>

                <div className="level-card silver active">
                  <div className="level-badge">🥈</div>
                  <h3>Silver</h3>
                  <div className="level-requirement">100 - 999 PAGA</div>
                  <div className="level-benefits">
                    <div className="benefit">✅ 1.5x reward multiplier</div>
                    <div className="benefit">✅ Priority support</div>
                    <div className="benefit">✅ Lower fees</div>
                    <div className="benefit">✅ Monthly reports</div>
                  </div>
                </div>

                <div className="level-card gold">
                  <div className="level-badge">🥇</div>
                  <h3>Gold</h3>
                  <div className="level-requirement">1,000+ PAGA</div>
                  <div className="level-benefits">
                    <div className="benefit">✅ 2x reward multiplier</div>
                    <div className="benefit">✅ VIP support line</div>
                    <div className="benefit">✅ Zero fees</div>
                    <div className="benefit">✅ Early feature access</div>
                    <div className="benefit">✅ Exclusive events</div>
                  </div>
                </div>
              </div>

              <div className="current-progress">
                <h4>Your Progress</h4>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%' }}></div>
                </div>
                <div className="progress-info">
                  <span>247 PAGA</span>
                  <span>753 PAGA to Gold</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'referrals' && (
            <motion.div
              key="referrals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rewards-tab"
            >
              <div className="referral-program">
                <div className="referral-hero">
                  <div className="referral-graphic">
                    <div className="referral-user you">
                      <div className="user-avatar">👤</div>
                      <div className="user-label">You</div>
                      <div className="reward-amount">+50 PAGA</div>
                    </div>
                    
                    <div className="referral-arrow">→</div>
                    
                    <div className="referral-user friend">
                      <div className="user-avatar">{dominicanUsers[1].avatar}</div>
                      <div className="user-label">{dominicanUsers[1].name.split(' ')[0]}</div>
                      <div className="user-location">🇩🇴 {dominicanUsers[1].city}</div>
                      <div className="reward-amount">+50 PAGA</div>
                    </div>
                  </div>
                  
                  <h3>Both of you win!</h3>
                  <p>When someone joins with your code and makes their first payment</p>
                </div>

                <div className="referral-stats">
                  <div className="stat-card">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Friends Invited</div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Successfully Joined</div>
                  </div>
                  
                  <div className="stat-card highlight">
                    <div className="stat-number">400</div>
                    <div className="stat-label">PAGA Earned</div>
                  </div>
                </div>

                <div className="referral-code-section">
                  <h4>Your Referral Code</h4>
                  <div className="referral-code">
                    <code>MAYO2024</code>
                    <motion.button
                      className="copy-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📋 Copy
                    </motion.button>
                  </div>
                </div>

                <div className="sharing-options">
                  <h4>Share with Friends</h4>
                  <div className="share-buttons">
                    <motion.button
                      className="share-button whatsapp"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💬 WhatsApp (Popular in DR!)
                    </motion.button>
                    
                    <motion.button
                      className="share-button telegram"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ✈️ Telegram
                    </motion.button>
                    
                    <motion.button
                      className="share-button instagram"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📸 Instagram Stories
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="coming-soon-badge"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Star size={16} />
        <span>Rewards System Coming Soon!</span>
      </motion.div>
    </div>
  );
};

export default RewardsTeaser;