'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Background3D() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setOffset({ x, y });
  }, []);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    const x = Math.max(-10, Math.min(10, e.gamma / 3));
    const y = Math.max(-10, Math.min(10, (e.beta - 45) / 3));
    setOffset({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    if ('ontouchstart' in window && typeof DeviceOrientationEvent !== 'undefined') {
      if ('requestPermission' in DeviceOrientationEvent) {
        const handler = async () => {
          try {
            const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
            if (permission === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          } catch { }
        };
        document.addEventListener('touchstart', handler, { once: true });
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [handleMouseMove, handleDeviceOrientation]);

  return (
    <div className="background-3d">
      {/* Simple Grid Background with subtle parallax */}
      <div
        className="grid-background"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />

      {/* Gradient overlay for depth */}
      <div className="gradient-overlay" />
    </div>
  );
}
