import React from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Coins, Users, Star, Zap, Lock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}>
      {/* Legal Notice Banner - Same as homepage */}
      <div style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '13px',
        borderBottom: '2px solid #ff6b6b'
      }}>
        ⚖️ <strong>LEGAL DOCUMENT</strong> - © 2024 Mayomh11 - Terms of Service for PaGaME™ Payment Platform
      </div>

      {/* Header */}
      <motion.div 
        className="relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-blue-300 transition-all duration-300 group"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" style={{ transform: 'translateX(0px)', transition: 'transform 0.3s' }} />
            <span className="font-medium">← Back to PaGaME</span>
          </Link>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section - Matching homepage style */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Hero Badge - Same style as homepage */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '2rem',
            color: 'white'
          }}>
            <Scale size={16} />
            <span>Legal • Terms of Service</span>
          </div>

          {/* Title - Same gradient as homepage */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Terms of Service
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '1rem'
          }}>
            PaGaME™ Payment Platform - <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700
            }}>Legal Framework for Secure Crypto Payments</span>
          </p>
        </motion.div>

        {/* Draft Notice - Styled like homepage cards */}
        <motion.div 
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '3rem',
            borderLeft: '4px solid #10b981'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1.5rem',
              flexShrink: 0
            }}>
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
                Development Phase Notice
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                These Terms of Service are currently in <span style={{ color: '#10b981', fontWeight: 600 }}>DRAFT form</span> during our development phase. 
                The final version will be reviewed by qualified legal counsel before processing real payments.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
                <Zap className="h-4 w-4" style={{ marginRight: '0.5rem' }} />
                <span style={{ fontSize: '0.9rem' }}>Last updated: August 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Service Description Section */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Coins className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Our Services</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                PaGaME provides comprehensive cryptocurrency payment services:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: Coins, title: 'Payment Processing', desc: 'Secure cryptocurrency payment facilitation and processing', color: '#60a5fa' },
                  { icon: Users, title: 'Username System', desc: 'Simplified payments using memorable usernames', color: '#10b981' },
                  { icon: Shield, title: 'Wallet Integration', desc: 'Seamless digital wallet management and integration', color: '#a855f7' }
                ].map((service, index) => (
                  <div key={index} style={{
                    background: `rgba(${service.color === '#60a5fa' ? '96, 165, 250' : service.color === '#10b981' ? '16, 185, 129' : '168, 85, 247'}, 0.1)`,
                    border: `1px solid rgba(${service.color === '#60a5fa' ? '96, 165, 250' : service.color === '#10b981' ? '16, 185, 129' : '168, 85, 247'}, 0.3)`,
                    borderRadius: '15px',
                    padding: '1.5rem'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: service.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <service.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Eligibility & Account Requirements</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Basic Requirements
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'Must be at least 18 years of age',
                      'Legal capacity to enter binding agreements',
                      'Reside in supported jurisdictions',
                      'Provide accurate registration information'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', marginTop: '0.5rem', marginRight: '0.75rem', flexShrink: 0 }}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#60a5fa', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Verification Process
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'KYC (Know Your Customer) verification required',
                      'Valid government-issued identification',
                      'Additional documentation may be requested',
                      'Enhanced verification for higher limits'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ width: '8px', height: '8px', background: '#60a5fa', borderRadius: '50%', marginTop: '0.5rem', marginRight: '0.75rem', flexShrink: 0 }}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities - Warning Card */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#ef4444',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1.5rem',
                  flexShrink: 0
                }}>
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
                    Prohibited Activities
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    The following activities are strictly prohibited on our platform:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                      {[
                        'Money laundering or terrorist financing',
                        'Fraud, market manipulation, or illegal activities',
                        'Violation of applicable laws or regulations',
                        'Purchase of illegal goods or services'
                      ].map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                          <div style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginTop: '0.5rem', marginRight: '0.75rem', flexShrink: 0 }}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                      {[
                        'System hacking or reverse engineering',
                        'Creating fake accounts or impersonation',
                        'Unauthorized automated tools usage',
                        'Interference with other users\' access'
                      ].map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                          <div style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', marginTop: '0.5rem', marginRight: '0.75rem', flexShrink: 0 }}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Terms */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Coins className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Transaction Terms</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  {
                    title: 'Processing',
                    color: '#fbbf24',
                    items: [
                      'All transactions are final once confirmed',
                      'Transaction fees clearly disclosed',
                      'Processing times vary by network',
                      'Blockchain networks beyond our control'
                    ]
                  },
                  {
                    title: 'Limits',
                    color: '#60a5fa',
                    items: [
                      'Daily, weekly, monthly limits apply',
                      'Enhanced verification for higher limits',
                      'Limits subject to modification',
                      'Suspicious activity may trigger limits'
                    ]
                  },
                  {
                    title: 'Failed Transactions',
                    color: '#10b981',
                    items: [
                      'Network fees may still apply',
                      'Not responsible for network issues',
                      'Refunds processed when possible',
                      'Blockchain finality rules apply'
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} style={{
                    background: `rgba(${section.color === '#fbbf24' ? '251, 191, 36' : section.color === '#60a5fa' ? '96, 165, 250' : '16, 185, 129'}, 0.1)`,
                    border: `1px solid rgba(${section.color === '#fbbf24' ? '251, 191, 36' : section.color === '#60a5fa' ? '96, 165, 250' : '16, 185, 129'}, 0.3)`,
                    borderRadius: '15px',
                    padding: '1.5rem'
                  }}>
                    <h3 style={{ color: section.color, fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                      {section.title}
                    </h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                          <span style={{ color: section.color, marginRight: '0.5rem' }}>•</span>
                          <span style={{ fontSize: '0.9rem' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Risk Warnings */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Compliance & Risk Warnings</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ color: '#a855f7', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Regulatory Compliance
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      { icon: Lock, text: 'Full AML/KYC compliance' },
                      { icon: Shield, text: 'Suspicious activity reporting' },
                      { icon: Scale, text: 'Law enforcement cooperation' },
                      { icon: Globe, text: 'Jurisdictional compliance' }
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                        <item.icon className="h-4 w-4 text-purple-400" style={{ marginTop: '0.25rem', marginRight: '0.75rem', flexShrink: 0 }} />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ color: '#ef4444', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Cryptocurrency Risks
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'High volatility and unpredictability',
                      'Potential for total loss',
                      'Irreversible blockchain transactions',
                      'No investment advice provided'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                        <AlertTriangle className="h-4 w-4 text-red-400" style={{ marginTop: '0.25rem', marginRight: '0.75rem', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: Globe, label: 'Legal', value: 'legal@pagame.app', color: '#10b981' },
                    { icon: Users, label: 'Support', value: 'support@pagame.app', color: '#60a5fa' },
                    { icon: Shield, label: 'Address', value: '[To be provided]', color: '#a855f7' }
                  ].map((contact, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: contact.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem'
                      }}>
                        <contact.icon className="h-4 w-4 text-white" />
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        <span style={{ color: 'white', fontWeight: 600 }}>{contact.label}:</span> {contact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '20px',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Legal Review Status</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  These Terms of Service are under review by qualified legal counsel specializing in fintech, 
                  cryptocurrency, and financial services regulations.
                </p>
                <div style={{ fontSize: '0.9rem', color: '#10b981' }}>
                  <strong>Development Phase:</strong> Document serves application and demonstration purposes.
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;