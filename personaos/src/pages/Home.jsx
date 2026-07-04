import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import '../assets/styles/home.css';

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20 }
  };

  const trendingCategories = ['Quantum Computing', 'SaaS Architecture', 'Growth Marketing', 'Hedge Fund Strategy', 'Bioinformatics'];

  return (
    <motion.div className="page-wrapper home-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="hero-section">
        <motion.div 
          className="announcement-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>New</span> Version 2.4 Expertise Synced
        </motion.div>
        
        <h1 className="hero-title">
          Download <br />
          <span className="gradient-text">Human Expertise.</span>
        </h1>
        <p className="hero-subtitle">
          Instantly integrate cognitive frameworks, operational workflows, and decision engines of world-class experts straight into your execution system.
        </p>

        <div className="search-container-large">
          <FiSearch className="search-icon-inside" />
          <input type="text" placeholder="Search cognitive models, fields of study, industry veterans..." />
          <button className="search-submit-btn">Search OS</button>
        </div>
      </section>

      <section className="dashboard-grid-section">
        <div className="section-header">
          <h3><FiTrendingUp /> Trending Capabilities</h3>
        </div>
        <div className="trending-tags-container">
          {trendingCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="trending-tag"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.div>
          ))}
        </div>

        <div className="premium-showcase-grid">
          <div className="showcase-card large-feature">
            <div className="card-glass-glow"></div>
            <span className="card-label">Featured Engine</span>
            <h2>Naval Ravikant Core v4.1</h2>
            <p>Access high-leverage frameworks, structural startup thinking, and long-term wealth formulation models.</p>
            <button className="action-link-btn">Initialize Persona <FiArrowRight /></button>
          </div>
          
          <div className="showcase-card standard-feature">
            <span className="card-label">Performance Metric</span>
            <h2>94.8%</h2>
            <p>Average decision validation score across user-instantiated professional architectures this week.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}