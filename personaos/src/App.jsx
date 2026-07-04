import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout & Navigation Components
import Sidebar from './components/Sidebar';

// Pages Import Grid
import Landing from './pages/Landing';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ExpertProfile from './pages/ExpertProfile';
import Statistics from './pages/Statistics';
import PersonaCore from './pages/PersonaCore';
import Workspace from './pages/Workspace';
import MyLibrary from './pages/MyLibrary';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Global Stylesheet Integration
import './assets/styles/global.css';
import './assets/styles/auth.css';

// --- LOCAL MOCK AUTH GATE COMPONENT (NO BACKEND REQUIRED) ---
function AuthGate({ onLoginSuccess, onBackToLanding }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleLocalAuth = (e) => {
    e.preventDefault();
    
    // Yahan aap koi bhi email/password daalein, yeh seedhe bypass kar dega!
    if (email && password) {
      if (isLogin) {
        onLoginSuccess();
      } else {
        alert("System ID Generated Locally! Now please login with your parameters.");
        setIsLogin(true); // Signup ke baad direct login mode toggle
      }
    } else {
      alert("Please fill all operational parameters.");
    }
  };

  return (
    <div className="auth-page-container">
      <button 
        className="btn-secondary-outline" 
        style={{ position: 'absolute', top: '30px', left: '40px' }}
        onClick={onBackToLanding}
      >
        ← Back
      </button>

      <motion.div 
        className="auth-glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="auth-logo-mark" />
        <h2>{isLogin ? 'Access PersonaOS' : 'Create Identity System'}</h2>
        <p className="subtitle">Initialize execution framework context layers locally.</p>

        <form className="auth-form-stack" onSubmit={handleLocalAuth}>
          {!isLogin && (
            <div className="input-field-wrapper">
              <label>Full Name</label>
              <input 
                type="text" 
                className="auth-input" 
                placeholder="Tony Stark" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>
          )}

          <div className="input-field-wrapper">
            <label>Identity Email</label>
            <input 
              type="email" 
              className="auth-input" 
              placeholder="name@firm.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-field-wrapper">
            <label>System Password</label>
            <input 
              type="password" 
              className="auth-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-primary-gradient auth-submit-btn">
            {isLogin ? 'Boot Dashboard' : 'Generate Local Account'}
          </button>
        </form>

        <p className="auth-toggle-link">
          {isLogin ? "New execution node? " : "Already verified? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create Local ID' : 'Sign In'}
          </span>
        </p>
      </motion.div>
    </div>
  );
}

// --- CORE PRIVATE DASHBOARD LAYOUT FRAME ---
function DashboardAnimatedLayout() {
  const location = useLocation();
  
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/expert/:id" element={<ExpertProfile />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/core" element={<PersonaCore />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/library" element={<MyLibrary />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- MAIN ENGINE CONTROLLER ---
export default function App() {
  // Application local stages: "landing" -> "auth" -> "dashboard"
  const [appStage, setAppStage] = useState('landing'); 

  return (
    <Router>
      <AnimatePresence mode="wait">
        {appStage === 'landing' && (
          <Landing key="landing" onGetStarted={() => setAppStage('auth')} />
        )}

        {appStage === 'auth' && (
          <AuthGate 
            key="auth" 
            onLoginSuccess={() => setAppStage('dashboard')} 
            onBackToLanding={() => setAppStage('landing')}
          />
        )}

        {appStage === 'dashboard' && (
          <DashboardAnimatedLayout key="dashboard" />
        )}
      </AnimatePresence>
    </Router>
  );
}