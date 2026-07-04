import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/landing.css';

export default function Landing({ onGetStarted }) {
  return (
    <div className="landing-container">
      <header className="landing-nav">
        <div className="landing-logo">PersonaOS</div>
        <button className="btn-secondary-outline" onClick={onGetStarted}>Sign In</button>
      </header>

      <main className="landing-hero">
        <motion.div 
          className="landing-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Introducing Next-Gen Cognitive Systems
        </motion.div>
        
        <motion.h1 
          className="landing-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          The Operating System for <span className="gradient-text">Human Expertise</span>
        </motion.h1>

        <motion.p 
          className="landing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Instantly integrate cognitive frameworks, decision engines, and workflows of top experts straight into your system.
        </motion.p>

        <motion.div 
          className="landing-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="btn-primary-gradient" style={{ padding: '14px 32px' }} onClick={onGetStarted}>
            Launch PersonaOS Free
          </button>
        </motion.div>
      </main>
    </div>
  );
}