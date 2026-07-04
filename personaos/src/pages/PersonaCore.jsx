import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiZap, FiUser } from 'react-icons/fi';
import '../assets/styles/core.css';

export default function PersonaCore() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Cognitive matrices calibrated. Ready to synthesize strategic models. Which expertise framework should we operate under today?' }
  ]);
  const [input, setInput] = useState('');

  const suggestedPrompts = [
    'Run micro-economic matrix evaluation on cross-border logistics systems.',
    'Optimize interface hierarchy strategies based on Linear app philosophy.',
    'Deconstruct product distribution channels matching Stripe scaling strategies.'
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Processing inference request using specialized engine weights... Context loaded. The strategic recommendation emphasizes isolation of platform components to decrease coupled failure states while utilizing decentralized message brokers.'
      }]);
    }, 1000);
  };

  return (
    <motion.div className="page-wrapper core-chat-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="chat-display-area">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble-row ${msg.role}`}>
            <div className="chat-avatar-icon">
              {msg.role === 'assistant' ? <FiZap /> : <FiUser />}
            </div>
            <div className="chat-message-bubble">
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-footer-controls">
        {messages.length === 1 && (
          <div className="suggested-prompts-grid">
            {suggestedPrompts.map((p, idx) => (
              <button key={idx} className="suggestion-pill" onClick={() => setInput(p)}>
                {p}
              </button>
            ))}
          </div>
        )}
        
        <div className="chat-input-wrapper">
          <input 
            type="text" 
            placeholder="Query your running human models..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-message-btn" onClick={handleSend}><FiSend /></button>
        </div>
      </div>
    </motion.div>
  );
}