'use client';

import { useEffect, useState, useCallback } from 'react';

type ShapeType = 'circle' | 'square' | 'ring' | 'cross' | 'dot';

interface FloatingShape {
  id: number;
  type: ShapeType;
  size: number;
  x: number;
  y: number;
  rotation: number;
  depth: number;
  opacity: number;
  color: 'accent' | 'white';
}

export default function Background3D() {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const types: ShapeType[] = ['circle', 'square', 'ring', 'cross', 'dot'];
    const newShapes: FloatingShape[] = [];

    for (let i = 0; i < 12; i++) {
      newShapes.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 40 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        depth: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.15 + 0.05,
        color: Math.random() > 0.5 ? 'accent' : 'white',
      });
    }
    setShapes(newShapes);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setOffset({ x, y });
  }, []);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    const x = Math.max(-20, Math.min(20, e.gamma / 2));
    const y = Math.max(-20, Math.min(20, (e.beta - 45) / 2));
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

  const renderShape = (shape: FloatingShape) => {
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: shape.size,
      height: shape.size,
      opacity: shape.opacity,
      transform: `translate(${offset.x * shape.depth}px, ${offset.y * shape.depth}px) rotate(${shape.rotation}deg)`,
    };

    const colorClass = shape.color === 'accent' ? 'shape-accent' : 'shape-white';

    switch (shape.type) {
      case 'circle':
        return <div className={`floating-shape shape-circle ${colorClass}`} style={baseStyle} />;
      case 'square':
        return <div className={`floating-shape shape-square ${colorClass}`} style={baseStyle} />;
      case 'ring':
        return <div className={`floating-shape shape-ring ${colorClass}`} style={baseStyle} />;
      case 'cross':
        return <div className={`floating-shape shape-cross ${colorClass}`} style={baseStyle} />;
      case 'dot':
        return <div className={`floating-shape shape-dot ${colorClass}`} style={{ ...baseStyle, width: shape.size / 3, height: shape.size / 3 }} />;
      default:
        return null;
    }
  };

  return (
    <div className="background-3d">
      {/* Large honeycomb pattern on left side like ChaiCode */}
      <div className="honeycomb-left" style={{ transform: `translate(${offset.x * 0.15}px, ${offset.y * 0.15}px)` }}>
        <svg viewBox="0 0 300 400" className="honeycomb-svg">
          {/* Row 1 */}
          <polygon points="50,30 80,15 110,30 110,60 80,75 50,60" className="hex" />
          <polygon points="110,30 140,15 170,30 170,60 140,75 110,60" className="hex" />

          {/* Row 2 - offset */}
          <polygon points="20,75 50,60 80,75 80,105 50,120 20,105" className="hex" />
          <polygon points="80,75 110,60 140,75 140,105 110,120 80,105" className="hex" />
          <polygon points="140,75 170,60 200,75 200,105 170,120 140,105" className="hex" />

          {/* Row 3 */}
          <polygon points="50,120 80,105 110,120 110,150 80,165 50,150" className="hex" />
          <polygon points="110,120 140,105 170,120 170,150 140,165 110,150" className="hex" />

          {/* Row 4 - offset */}
          <polygon points="20,165 50,150 80,165 80,195 50,210 20,195" className="hex" />
          <polygon points="80,165 110,150 140,165 140,195 110,210 80,195" className="hex" />
          <polygon points="140,165 170,150 200,165 200,195 170,210 140,195" className="hex" />

          {/* Row 5 */}
          <polygon points="50,210 80,195 110,210 110,240 80,255 50,240" className="hex" />
          <polygon points="110,210 140,195 170,210 170,240 140,255 110,240" className="hex" />

          {/* Row 6 - offset */}
          <polygon points="20,255 50,240 80,255 80,285 50,300 20,285" className="hex" />
          <polygon points="80,255 110,240 140,255 140,285 110,300 80,285" className="hex" />
        </svg>
      </div>

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <div key={shape.id}>{renderShape(shape)}</div>
      ))}

      <div className="gradient-overlay" />
    </div>
  );
}
