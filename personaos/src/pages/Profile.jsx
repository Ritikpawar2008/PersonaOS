import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiActivity, FiLogOut, FiMoon } from 'react-icons/fi';
import '../assets/styles/profile.css';

export default function Profile() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="profile-container-main">
        <div className="profile-identity-hero-card">
          <div className="profile-avatar-large-wrapper">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="Active Account User" />
          </div>
          <div className="profile-identity-meta-text">
            <h2>Alexander Wright</h2>
            <p>System Enterprise Identity • Premium Tier Active</p>
          </div>
        </div>

        <div className="profile-data-metrics-sections-grid">
          <div className="profile-card-panel">
            <h3><FiUser /> Account Specifications</h3>
            <div className="specifications-table-list">
              <div className="spec-item-row"><span>Subscription Tier</span> <strong>Persona Pro Enterprise</strong></div>
              <div className="spec-item-row"><span>Allocation Node Limit</span> <strong>Unlimited Active Threads</strong></div>
              <div className="spec-item-row"><span>Billing Interface Reference</span> <strong>Stripe Live ID-9402</strong></div>
            </div>
          </div>

          <div className="profile-card-panel">
            <h3><FiActivity /> Active Interface Controls</h3>
            <div className="controls-options-stack-list">
              <div className="control-option-toggle-row">
                <div>
                  <h5>High-Fidelity Rendering Layer</h5>
                  <p>Enables advanced glassmorphism micro-layers for desktop engines.</p>
                </div>
                <input type="checkbox" defaultChecked className="premium-toggle-checkbox-input" />
              </div>

              <div className="control-option-toggle-row">
                <div>
                  <h5>Dark System Simulation Layer</h5>
                  <p>Inverts application matrix layout styles to dark state elements.</p>
                </div>
                <button className="action-icon-only-btn"><FiMoon /></button>
              </div>
            </div>
            <button className="system-logout-trigger-btn"><FiLogOut /> Disconnect PersonaOS Node</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}