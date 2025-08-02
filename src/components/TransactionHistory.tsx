import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Calendar, ArrowUpDown, MapPin } from 'lucide-react';
import { generateDominicanTransactions } from '../data/dominicanData';

const TransactionHistory: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  
  const allTransactions = generateDominicanTransactions();
  
  const formatAmount = (amount: number, currency: string, type: string) => {
    const prefix = type === 'sent' ? '-' : '+';
    if (currency === 'DOP') {
      return `${prefix}RD$${amount.toLocaleString()}`;
    }
    return `${prefix}$${amount.toFixed(2)}`;
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-DO', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Housing': '🏠',
      'Income': '💼',
      'Food & Dining': '🍽️',
      'Grocery': '🛒',
      'Top-up': '💳',
      'Utilities': '⚡',
      'Family': '👨‍👩‍👧‍👦',
      'Food Delivery': '🚗',
      'Healthcare': '🏥',
      'Transportation': '⛽'
    };
    return icons[category] || '💰';
  };
  
  const filteredTransactions = allTransactions
    .filter(transaction => {
      if (filter === 'all') return true;
      return transaction.type === filter;
    })
    .filter(transaction => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        transaction.description.toLowerCase().includes(searchLower) ||
        transaction.merchant?.toLowerCase().includes(searchLower) ||
        transaction.to?.name.toLowerCase().includes(searchLower) ||
        transaction.from?.name.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.timestamp.getTime() - a.timestamp.getTime();
      }
      if (sortBy === 'amount') {
        return b.amount - a.amount;
      }
      return 0;
    });

  return (
    <div className="transaction-history">
      <div className="history-header">
        <h2>📊 Transaction History</h2>
        <p>Your complete payment activity in Dominican Republic</p>
      </div>

      <div className="history-controls">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <Filter size={16} />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Transactions</option>
              <option value="sent">Sent</option>
              <option value="received">Received</option>
              <option value="fund_added">Top-ups</option>
            </select>
          </div>

          <div className="sort-group">
            <ArrowUpDown size={16} />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
      </div>

      <div className="summary-stats">
        <div className="stat-card">
          <div className="stat-icon">💸</div>
          <div className="stat-info">
            <div className="stat-value">
              RD${allTransactions
                .filter(t => t.type === 'sent')
                .reduce((sum, t) => sum + (t.currency === 'DOP' ? t.amount : t.amount * 60), 0)
                .toLocaleString()}
            </div>
            <div className="stat-label">Total Sent</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <div className="stat-value">
              RD${allTransactions
                .filter(t => t.type === 'received')
                .reduce((sum, t) => sum + (t.currency === 'DOP' ? t.amount : t.amount * 60), 0)
                .toLocaleString()}
            </div>
            <div className="stat-label">Total Received</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <div className="stat-value">{allTransactions.length}</div>
            <div className="stat-label">Total Transactions</div>
          </div>
        </div>
      </div>

      <div className="transactions-list">
        {filteredTransactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            className={`transaction-item ${transaction.type}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.01, backgroundColor: '#f8f9fa' }}
          >
            <div className="transaction-icon">
              {transaction.category ? getCategoryIcon(transaction.category) : 
               (transaction.type === 'sent' ? '💸' : 
                transaction.type === 'received' ? '💰' : '💳')}
            </div>

            <div className="transaction-details">
              <div className="transaction-primary">
                <div className="transaction-description">
                  {transaction.type === 'sent' && transaction.to ? (
                    <>Sent to <strong>{transaction.to.name}</strong></>
                  ) : transaction.type === 'received' && transaction.from ? (
                    <>From <strong>{transaction.from.name}</strong></>
                  ) : (
                    <strong>{transaction.description}</strong>
                  )}
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {formatAmount(transaction.amount, transaction.currency, transaction.type)}
                </div>
              </div>

              <div className="transaction-secondary">
                <div className="transaction-info">
                  <span className="transaction-date">
                    <Calendar size={14} />
                    {formatDate(transaction.timestamp)}
                  </span>
                  
                  {(transaction.location || (transaction.to || transaction.from)) && (
                    <span className="transaction-location">
                      <MapPin size={14} />
                      {transaction.location || 
                       (transaction.to?.city) || 
                       (transaction.from?.city) || 
                       'Dominican Republic'}
                    </span>
                  )}
                  
                  {transaction.category && (
                    <span className="transaction-category">
                      {transaction.category}
                    </span>
                  )}
                </div>
                
                <div className="transaction-status">
                  <span className="status-badge completed">✅ Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTransactions.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No transactions found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="history-footer">
        <p>
          Showing {filteredTransactions.length} of {allTransactions.length} transactions
        </p>
        <div className="export-options">
          <button className="export-btn">
            📋 Export CSV
          </button>
          <button className="export-btn">
            📄 Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;