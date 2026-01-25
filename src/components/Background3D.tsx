'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function Background3D() {
  // Use refs for direct DOM manipulation to avoid re-renders
  const gridRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const [gyroEnabled, setGyroEnabled] = useState(false);
  const [showGyroPrompt, setShowGyroPrompt] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const permissionGranted = useRef(false);

  // Animation loop using Request Animation Frame
  const animate = useCallback(() => {
    if (gridRef.current) {
      // Lerp for smoothness (optional, but good for gyro)
      const { x, y } = offsetRef.current;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!permissionGranted.current) {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      offsetRef.current = { x, y };
    }
  }, []);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    permissionGranted.current = true;

    const x = Math.max(-15, Math.min(15, e.gamma * 0.4));
    const y = Math.max(-15, Math.min(15, (e.beta - 45) * 0.4));
    offsetRef.current = { x, y };
  }, []);

  const requestGyroPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent === 'undefined') return;

    try {
      if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientation', handleDeviceOrientation);
          setGyroEnabled(true);
          setShowGyroPrompt(false);
        }
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
        setGyroEnabled(true);
        setShowGyroPrompt(false);
      }
    } catch (error) {
      console.log('Gyroscope permission denied or not available');
      setShowGyroPrompt(false);
    }
  }, [handleDeviceOrientation]);

  const dismissPrompt = () => {
    setShowGyroPrompt(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    if (isTouchDevice && typeof DeviceOrientationEvent !== 'undefined') {
      // Check if permission is needed (iOS 13+)
      if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
        setTimeout(() => setShowGyroPrompt(true), 1500);
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
        setGyroEnabled(true);
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [handleMouseMove, handleDeviceOrientation]);

  return (
    <>
      <div className="background-3d">
        <div
          ref={gridRef}
          className="grid-background"
          style={{
            transform: 'translate(0px, 0px)',
            transition: 'transform 0.1s ease-out' // Keep CSS transition for extra smoothing
          }}
        />
        <div className="gradient-overlay" />
      </div>

      <AnimatePresence>
        {showGyroPrompt && isMobile && !gyroEnabled && (
          <motion.div
            className="gyro-prompt-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="gyro-prompt liquid-glass"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div className="gyro-icon">
                <Smartphone size={32} />
              </div>
              <h3>Enable Motion Effects?</h3>
              <p>Allow motion sensor access for an interactive parallax background experience.</p>
              <div className="gyro-buttons">
                <button onClick={dismissPrompt} className="gyro-btn-secondary">
                  No Thanks
                </button>
                <button onClick={requestGyroPermission} className="gyro-btn-primary">
                  Enable
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
