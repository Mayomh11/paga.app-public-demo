import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Globe, Lock, Star, Zap, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
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
        🔒 <strong>LEGAL DOCUMENT</strong> - © 2024 Mayomh11 - Privacy Policy for PaGaME™ Payment Platform
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
            <Shield size={16} />
            <span>Legal • Privacy Policy</span>
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
            Privacy Policy
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
            }}>Protecting Your Digital Privacy</span>
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
            borderLeft: '4px solid #fbbf24'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
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
                This Privacy Policy is currently in <span style={{ color: '#fbbf24', fontWeight: 600 }}>DRAFT form</span> during our development phase. 
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
            
            {/* Introduction Section */}
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
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Introduction</h2>
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  PaGaME ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  cryptocurrency payment platform and related services.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                  By using our services, you agree to the collection and use of information in accordance 
                  with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Information We Collect - Grid Layout */}
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
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Database className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Information We Collect</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* Personal Information Card */}
                <div style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ color: '#60a5fa', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Personal Information
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'Email addresses for beta waitlist',
                      'Username and display names',
                      'Wallet addresses for transactions',
                      'Identity verification documents',
                      'Phone numbers for 2FA'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#60a5fa', marginRight: '0.5rem' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Financial Information Card */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Financial Information
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'Transaction history and amounts',
                      'Cryptocurrency wallet addresses',
                      'Payment method information',
                      'Banking information (when applicable)'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#10b981', marginRight: '0.5rem' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Information Card */}
                <div style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{ color: '#a855f7', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Technical Information
                  </h3>
                  <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyle: 'none', padding: 0 }}>
                    {[
                      'IP addresses and device identifiers',
                      'Browser type and version',
                      'Usage analytics and interactions',
                      'Device and network information',
                      'Location data (when permitted)'
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#a855f7', marginRight: '0.5rem' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security Section */}
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
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Data Security</h2>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We implement industry-standard security measures to protect your information:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: Shield, title: 'End-to-End Encryption', desc: 'All sensitive data transmission is encrypted using industry-standard protocols.' },
                  { icon: Database, title: 'Secure Storage', desc: 'Database storage with advanced access controls and monitoring.' },
                  { icon: Users, title: 'Multi-Factor Authentication', desc: 'Enhanced account security with multiple verification layers.' },
                  { icon: FileText, title: 'Regular Audits', desc: 'Continuous security assessments and vulnerability testing.' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain Transparency Notice */}
            <div style={{
              background: 'rgba(255, 107, 107, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 107, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              borderLeft: '4px solid #ff6b6b'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#ff6b6b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1.5rem',
                  flexShrink: 0
                }}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
                    Blockchain Transparency Notice
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#ff6b6b', fontWeight: 600 }}>Important:</span> Cryptocurrency transactions are recorded on public blockchains. 
                    While wallet addresses may be pseudonymous, transaction amounts and addresses are permanently visible. 
                    This information cannot be deleted or modified once confirmed on the blockchain.
                  </p>
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
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Contact Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      <span style={{ color: 'white', fontWeight: 600 }}>Email:</span> privacy@pagame.app
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      <span style={{ color: 'white', fontWeight: 600 }}>DPO:</span> [To be appointed]
                    </p>
                  </div>
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
                  This privacy policy is under review by qualified legal counsel specializing in fintech and cryptocurrency regulations.
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

export default PrivacyPolicy;