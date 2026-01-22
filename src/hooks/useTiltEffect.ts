'use client';

import { useEffect, useRef, useCallback } from 'react';

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export function useTiltEffect(options: TiltOptions = {}) {
  const { maxTilt = 2, scale = 1.01, speed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    const rotateX = -percentY * maxTilt;
    const rotateY = percentX * maxTilt;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  }, [maxTilt, scale]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (!ref.current || e.gamma === null || e.beta === null) return;

    // Limit to very subtle movement
    const rotateY = Math.max(-maxTilt, Math.min(maxTilt, e.gamma / 15));
    const rotateX = Math.max(-maxTilt, Math.min(maxTilt, (e.beta - 45) / 15));

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, [maxTilt]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transition = `transform ${speed}ms ease-out`;
    element.style.transformStyle = 'preserve-3d';

    // Mouse events for desktop
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Gyro for mobile (with permission check)
    const enableGyro = async () => {
      if (typeof DeviceOrientationEvent !== 'undefined' &&
        'requestPermission' in DeviceOrientationEvent) {
        try {
          const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        } catch {
          // Permission denied or not supported
        }
      } else if (typeof DeviceOrientationEvent !== 'undefined') {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    // Only enable gyro on touch devices
    if ('ontouchstart' in window) {
      enableGyro();
    }

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [handleMouseMove, handleMouseLeave, handleDeviceOrientation, speed]);

  return ref;
}
