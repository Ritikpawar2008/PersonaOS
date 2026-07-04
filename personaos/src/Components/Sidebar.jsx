import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiSearch, FiBarChart2, FiCpu, 
  FiBriefcase, FiFolder, FiUser, FiSettings, FiZap 
} from 'react-icons/fi';
import '../assets/styles/sidebar.css';

export default function Sidebar() {
  const menuItems = [
    { path: '/', icon: <FiHome />, label: 'Home' },
    { path: '/explore', icon: <FiSearch />, label: 'Explore' },
    { path: '/statistics', icon: <FiBarChart2 />, label: 'Statistics' },
    { path: '/core', icon: <FiCpu />, label: 'Persona Core' },
    { path: '/workspace', icon: <FiBriefcase />, label: 'Workspace' },
    { path: '/library', icon: <FiFolder />, label: 'My Library' },
    { path: '/profile', icon: <FiUser />, label: 'Profile' },
    { path: '/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar-container">
      <div className="sidebar-brand">
        <div className="brand-logo"></div>
        <div className="brand-text">
          <h2>PersonaOS</h2>
          <p>The App Store for Human Expertise</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <NavLink 
            to={item.path} 
            key={index} 
            className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="active-bg-gradient"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <motion.div 
        className="sidebar-card-upgrade"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <div className="upgrade-icon-wrapper">
          <FiZap />
        </div>
        <h3>Upgrade to Persona Pro</h3>
        <p>Unlimited Expert Personas, Priority AI & Premium Workspace access.</p>
        <button className="upgrade-btn">Go Premium</button>
      </motion.div>
    </aside>
  );
}