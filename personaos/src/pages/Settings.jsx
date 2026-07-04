import React from 'react';
import { motion } from 'framer-motion';
import { FiSliders, FiShield, FiBell, FiCreditCard } from 'react-icons/fi';
import '../assets/styles/settings.css';

export default function Settings() {
  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="settings-header">
        <h1 className="page-title">System Settings</h1>
        <p className="page-subtitle">Configure core engine parameters, interface scales, and network resource layers.</p>
      </div>

      <div className="settings-cards-vertical-stack">
        <div className="settings-card-panel-item">
          <div className="panel-icon-side-label"><FiSliders /></div>
          <div className="panel-main-configuration-inputs">
            <h4>General Operations Config</h4>
            <p>Modify local infrastructure directory nodes and language translation layers.</p>
            <div className="input-group-inline-row">
              <input type="text" defaultValue="https://api.persona-os.internal/v1" className="premium-text-input-field" />
              <button className="panel-commit-save-btn">Update Endpoint</button>
            </div>
          </div>
        </div>

        <div className="settings-card-panel-item">
          <div className="panel-icon-side-label"><FiBell /></div>
          <div className="panel-main-configuration-inputs">
            <h4>Telemetry Notifications Engine</h4>
            <p>Toggle high-priority compute triggers and threshold limits updates signals.</p>
            <div className="checkboxes-vertical-stack-list">
              <label className="checkbox-label-wrapper-row"><input type="checkbox" defaultChecked /> Model Synced Events</label>
              <label className="checkbox-label-wrapper-row"><input type="checkbox" defaultChecked /> Context Allocation Alerts</label>
            </div>
          </div>
        </div>

        <div className="settings-card-panel-item">
          <div className="panel-icon-side-label"><FiShield /></div>
          <div className="panel-main-configuration-inputs">
            <h4>Security Matrix & Keys</h4>
            <p>Manage cryptographic validation layers and authorized API access parameters tokens.</p>
            <button className="btn-secondary-outline">Configure Encrypted Nodes Keys</button>
          </div>
        </div>

        <div className="settings-card-panel-item">
          <div className="panel-icon-side-label"><FiCreditCard /></div>
          <div className="panel-main-configuration-inputs">
            <h4>Billing Infrastructure Portal</h4>
            <p>Review active computational pricing models records handled via Stripe secure gateway platforms.</p>
            <button className="btn-secondary-outline">Open Billing Vault Portal</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}