import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiActivity, FiCpu, FiAward, FiCheckCircle } from 'react-icons/fi';
import '../assets/styles/profile-view.css';

export default function ExpertProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated static fetch for deep architecture values
  const profile = {
    name: 'Dr. Aris Thorne',
    profession: 'AI Research Director (Ex-OpenAI / DeepMind)',
    bio: 'Specialized in multi-modal systems, cognitive alignment architectures, and structural algorithmic efficiency scaling protocols over 14+ years.',
    skills: ['Cognitive Architecture', 'Neural Alignment', 'Transformer Infrastructure', 'Vector Scaling'],
    achievements: ['NeurIPS Best Paper Track 1', 'Managed 800+ Node Clusters', 'Framework Patent #9,102'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  };

  return (
    <motion.div className="page-wrapper" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }}>
      <button className="back-navigation-btn" onClick={() => navigate('/explore')}>
        <FiArrowLeft /> Back to Marketplace
      </button>

      <div className="profile-layout-container">
        <div className="profile-left-hero">
          <img src={profile.image} alt={profile.name} className="main-profile-avatar" />
          <h2>{profile.name}</h2>
          <p className="profession-sub-tag">{profile.profession}</p>
          
          <div className="profile-action-group">
            <button className="btn-primary-gradient">Initialize Cognitive Engine</button>
            <button className="btn-secondary-outline">Schedule Sync Session</button>
          </div>
        </div>

        <div className="profile-right-details">
          <div className="detail-card-panel">
            <h3><FiCpu /> Core Biography & Architecture</h3>
            <p className="bio-text">{profile.bio}</p>
          </div>

          <div className="detail-card-panel">
            <h3><FiActivity /> Synthesized Competency Vectors</h3>
            <div className="skills-grid-chips">
              {profile.skills.map((skill, index) => (
                <span key={index} className="competency-chip"><FiCheckCircle /> {skill}</span>
              ))}
            </div>
          </div>

          <div className="detail-card-panel">
            <h3><FiAward /> Historical Validation & Benchmarks</h3>
            <ul className="achievements-list">
              {profile.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}