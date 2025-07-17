import React, { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = globalThis;
      
      // Normalize mouse position to range [-1, 1]
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    globalThis.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      globalThis.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Different parallax speeds for each layer to create depth (reduced by 50%)
  const getLayerTransform = (speed: number) => {
    const moveX = mousePosition.x * speed;
    const moveY = mousePosition.y * speed;
    return `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  return (
    <div className="parallax-background">
      {/* Background layer - slowest movement */}
      <div 
        className="parallax-layer parallax-layer-back"
        style={{
          transform: getLayerTransform(1),
        }}
      >
        <img 
          src="/img/background/bg-background.png" 
          alt="Background layer"
          draggable={false}
        />
      </div>
      
      {/* Mid layer - medium movement */}
      <div 
        className="parallax-layer parallax-layer-mid"
        style={{
          transform: getLayerTransform(3),
        }}
      >
        <img 
          src="/img/background/bg-mid-layer-right.png" 
          alt="Mid layer"
          draggable={false}
        />
      </div>
      
      {/* Foreground layer - fastest movement */}
      <div 
        className="parallax-layer parallax-layer-front"
        style={{
          transform: getLayerTransform(6),
        }}
      >
        <img 
          src="/img/background/bg-foreground-left.png" 
          alt="Foreground layer"
          draggable={false}
        />
      </div>
    </div>
  );
}