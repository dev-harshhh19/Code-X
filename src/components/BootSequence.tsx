'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BootPhase = 'init' | 'loading' | 'onboarding' | 'dismissed';

export default function BootSequence() {
  const [phase, setPhase] = useState<BootPhase>('init');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check local storage after mount to avoid hydration mismatch
    const hasOnboarded = localStorage.getItem('code-x-onboarded');
    
    if (hasOnboarded) {
      setPhase('dismissed');
    } else {
      setPhase('loading');
      // Transition from loading to onboarding after 1.5 seconds
      const timer = setTimeout(() => {
        setPhase('onboarding');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('code-x-onboarded', 'true');
    setPhase('dismissed');
  };

  return (
    <AnimatePresence>
      {phase !== 'dismissed' && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <AnimatePresence mode="wait">
            {/* --- LOADING PHASE --- */}
            {phase === 'loading' && isClient && (
              <motion.div
                key="loading"
                className="boot-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="boot-loader-text t-label">
                  <span className="boot-pulse">System Initialization</span>
                </div>
              </motion.div>
            )}

            {/* --- ONBOARDING PHASE --- */}
            {phase === 'onboarding' && (
              <motion.div
                key="onboarding"
                className="boot-content boot-content-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="onboarding-text-group">
                  <p className="t-eyebrow" style={{ marginBottom: '1.5rem' }}>Welcome to Code-X</p>
                  <h1 className="t-title" style={{ marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.15 }}>
                    A pure client-side cipher system.
                  </h1>
                  <p className="t-body" style={{ color: 'var(--fg-muted)', maxWidth: '480px', marginBottom: '3rem' }}>
                    No server communication. No database storage. No tracking analytics.
                    Everything happens locally in your browser.
                  </p>
                  
                  <button onClick={handleEnter} className="btn btn-primary boot-btn">
                    Acknowledge & Enter
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
