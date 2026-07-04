import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiCode, FiCpu, FiTrendingUp, FiLayers, FiActivity, FiTerminal } from 'react-icons/fi';
import '../assets/styles/explore.css';

const EXPERTS_DATA = [
  { id: '1', name: 'Alex Rivera', role: 'Principal AI Architect', category: 'AI & Core Intelligence', rating: 4.9, frameworks: 18, icon: <FiCpu />, color: '#7B61FF' },
  { id: '2', name: 'Elena Rostova', role: 'SaaS Scale Strategist', category: 'Growth & Business', rating: 4.8, frameworks: 12, icon: <FiTrendingUp />, color: '#FF4D6D' },
  { id: '3', name: 'Marcus Chen', role: 'Systems Engineer', category: 'DevOps & Infrastructure', rating: 5.0, frameworks: 24, icon: <FiTerminal />, color: '#00D2FF' },
  { id: '4', name: 'Sarah Jenkins', role: 'UX Cognitive Designer', category: 'Design & Interface', rating: 4.7, frameworks: 9, icon: <FiLayers />, color: '#FF7A18' },
  { id: '5', name: 'Dr. Aris Thorne', role: 'Neural Net Researcher', category: 'AI & Core Intelligence', rating: 4.9, frameworks: 15, icon: <FiCpu />, color: '#22C55E' },
  { id: '6', name: 'Devon Lane', role: 'Full-Stack Protocol Lead', category: 'Software Architecture', rating: 4.8, frameworks: 21, icon: <FiCode />, color: '#3B82F6' },
  { id: '7', name: 'Amara Okafor', role: 'Quantum Algorithm Dev', category: 'AI & Core Intelligence', rating: 5.0, frameworks: 14, icon: <FiCpu />, color: '#EC4899' },
  { id: '8', name: 'Liam Vance', role: 'Bio-Informatics Data Lead', category: 'Health & Science', rating: 4.6, frameworks: 11, icon: <FiActivity />, color: '#F59E0B' },
  { id: '9', name: 'Rohit Polley', role: 'Cybersecurity Architect', category: 'DevOps & Infrastructure', rating: 4.9, frameworks: 19, icon: <FiTerminal />, color: '#6366F1' },
  { id: '10', name: 'Sofia Alvarez', role: 'Product Tokenomics Expert', category: 'Growth & Business', rating: 4.7, frameworks: 16, icon: <FiTrendingUp />, color: '#14B8A6' }
];

// Helper function jo name se pehle do letters nikalegi (e.g. "Alex Rivera" -> "AR")
const getInitials = (name) => {
  const parts = name.split(' ');
  return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2);
};

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Core Intelligence', 'Software Architecture', 'DevOps & Infrastructure', 'Growth & Business', 'Design & Interface'];

  const filteredExperts = EXPERTS_DATA.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) || expert.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-wrapper">
      <div className="explore-header-container">
        <h1>Explore Cognitive Models</h1>
        <p>Deploy specialized world-class expertise matrices directly into your localized workflow workspace.</p>
        
        <div className="explore-search-box">
          <FiSearch className="search-icon-lens" />
          <input 
            type="text" 
            placeholder="Search cognitive models, positions, stack expertise..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-pill-row">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="expert-grid-layout" layout>
        {filteredExperts.map((expert) => (
          <motion.div 
            key={expert.id} 
            className="expert-card-frame"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <div className="card-top-category-row">
              <span className="category-meta-tag">{expert.icon} {expert.category}</span>
              <span className="rating-badge-star">★ {expert.rating}</span>
            </div>

            <div className="card-profile-block">
              {/* Premium Initial Avatar Disk Replacement */}
              <div 
                className="expert-avatar-initials-disk"
                style={{ backgroundColor: `${expert.color}15`, color: expert.color, border: `1px solid ${expert.color}30` }}
              >
                {getInitials(expert.name)}
              </div>
              <h3>{expert.name}</h3>
              <p>{expert.role}</p>
            </div>

            <div className="card-metrics-row">
              <div className="metric-cell">
                <span className="metric-val">{expert.frameworks}</span>
                <span className="metric-label">Frameworks</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">Active</span>
                <span className="metric-label">Status</span>
              </div>
            </div>

            <Link to={`/expert/${expert.id}`} className="btn-primary-gradient view-profile-btn">
              Sync Cognitive Hub
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}