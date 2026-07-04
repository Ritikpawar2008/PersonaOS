import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiPlus, FiTerminal, FiEdit3 } from 'react-icons/fi';
import '../assets/styles/workspace.css';

export default function Workspace() {
  const currentDocs = [
    { title: 'Q3 Enterprise Scale Infrastructure Architecture', type: 'System Spec', date: 'Modified 2h ago' },
    { title: 'Series B Capital Structure Optimization Framework', type: 'Financial Model', date: 'Modified 1d ago' },
    { title: 'Product Interface Psychology & Micro-interaction Rules', type: 'Design System', date: 'Modified 3d ago' }
  ];

  return (
    <motion.div className="page-wrapper workspace-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="workspace-layout-split">
        <div className="workspace-left-sidebar-panel">
          <div className="panel-title-row">
            <h4>Documents Vault</h4>
            <button className="action-icon-only-btn"><FiPlus /></button>
          </div>
          <div className="document-vault-list">
            {currentDocs.map((doc, index) => (
              <div key={index} className="vault-doc-item">
                <FiFileText className="doc-icon-static" />
                <div className="doc-meta">
                  <h5>{doc.title}</h5>
                  <span>{doc.type} • {doc.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="workspace-right-editor-panel">
          <div className="editor-controls-header">
            <span className="current-active-persona-indicator"><FiTerminal /> Running: Naval Ravikant Engine v4.1</span>
            <button className="workspace-action-btn"><FiEdit3 /> Export Model Spec</button>
          </div>
          <div className="premium-editable-viewport">
            <h1 contentEditable suppressContentEditableWarning={true} className="editable-h1">
              Untitled Execution Blueprint
            </h1>
            <p contentEditable suppressContentEditableWarning={true} className="editable-body-p">
              Type clear prompt vectors here. Use natural human language patterns to query cross-functional operational nodes across structural pipelines...
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}