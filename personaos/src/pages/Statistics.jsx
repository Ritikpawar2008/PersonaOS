import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiLayers, FiClock, FiMessageSquare } from 'react-icons/fi';
import '../assets/styles/statistics.css';

export default function Statistics() {
  const analyticsData = [
    { title: 'Active Neural Models', value: '14', change: '+2 new context sets', icon: <FiLayers /> },
    { title: 'Inference Context Hours', value: '184.5 hrs', change: 'Top 4% global capacity', icon: <FiClock /> },
    { title: 'Complex Queries Solved', value: '3,829', change: '99.2% resolution metrics', icon: <FiMessageSquare /> },
  ];

  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="statistics-header">
        <h1 className="page-title">Telemetry & Metrics</h1>
        <p className="page-subtitle">Real-time validation tracking of computational resource allocation and response fidelity.</p>
      </div>

      <div className="analytics-overview-grid">
        {analyticsData.map((data, idx) => (
          <div className="analytics-metric-card" key={idx}>
            <div className="metric-icon-box">{data.icon}</div>
            <div className="metric-content">
              <span>{data.title}</span>
              <h2>{data.value}</h2>
              <p className="positive-trend"><FiTrendingUp /> {data.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-mock-container">
        <div className="chart-wrapper-box">
          <h3>Weekly Computational Load Allocation</h3>
          <div className="bar-chart-mock">
            <div className="bar" style={{ height: '60%' }} data-label="Mon"></div>
            <div className="bar" style={{ height: '85%' }} data-label="Tue"></div>
            <div className="bar" style={{ height: '45%' }} data-label="Wed"></div>
            <div className="bar" style={{ height: '95%' }} data-label="Thu"></div>
            <div className="bar" style={{ height: '70%' }} data-label="Fri"></div>
            <div className="bar" style={{ height: '80%' }} data-label="Sat"></div>
            <div className="bar" style={{ height: '50%' }} data-label="Sun"></div>
          </div>
        </div>

        <div className="chart-wrapper-box">
          <h3>Domain Allocation Vectors</h3>
          <div className="pie-chart-mock-list">
            <div className="pie-item"><span className="color-indicator tech"></span> Systems Architecture (42%)</div>
            <div className="pie-item"><span className="color-indicator finance"></span> Macro Asset Allocation (28%)</div>
            <div className="pie-item"><span className="color-indicator design"></span> Interface Psychology (20%)</div>
            <div className="pie-item"><span className="color-indicator other"></span> Latent Variables (10%)</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}