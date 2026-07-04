import React from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiSearch, FiSliders } from 'react-icons/fi';
import '../assets/styles/library.css';

export default function MyLibrary() {
  const libraryPersonas = [
    { name: 'Naval Ravikant Core', version: 'v4.1', state: 'Active Allocation', statusColor: '#00D1B2', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    { name: 'Dr. Aris Thorne', version: 'v1.0', state: 'Standby Model', statusColor: '#FF7A18', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
    { name: 'Elena Rostova', version: 'v2.8', state: 'Active Allocation', statusColor: '#00D1B2', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' }
  ];

  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="library-top-bar">
        <div>
          <h1 className="page-title">Neural Library</h1>
          <p className="page-subtitle">Your allocated cognitive profiles currently deployed inside local system memory.</p>
        </div>
        <div className="library-actions-row">
          <div className="search-bar-inline">
            <FiSearch />
            <input type="text" placeholder="Filter active library..." />
          </div>
        </div>
      </div>

      <div className="library-cards-grid-layout">
        {libraryPersonas.map((persona, index) => (
          <div className="library-premium-card" key={index}>
            <div className="card-top-identity">
              <img src={persona.image} alt={persona.name} className="library-card-avatar" />
              <div>
                <h4>{persona.name}</h4>
                <span className="version-pill-tag">{persona.version}</span>
              </div>
            </div>
            <div className="card-bottom-status-row">
              <span className="status-label-indicator">
                <span className="pulse-dot" style={{ backgroundColor: persona.statusColor }}></span>
                {persona.state}
              </span>
              <button className="library-card-action-trigger">Launch Module</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}