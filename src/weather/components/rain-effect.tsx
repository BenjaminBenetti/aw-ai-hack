import React, { useEffect, useState } from 'react';

interface RainEffectProps {
  isRaining: boolean;
  intensity?: number;
}

interface RainDrop {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  text: string;
  splatterY?: number;
} 

interface SplatterChar {
  char: string;
  x: number;
  y: number;
  delay: number;
}

interface Splatter {
  id: number;
  x: number;
  y: number;
  characters: SplatterChar[];
  createdAt: number;
}

export const RainEffect: React.FC<RainEffectProps> = ({ isRaining, intensity = 50 }) => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);
  const [splatters, setSplatters] = useState<Splatter[]>([]);

  // Handle splatters
  const handleAnimationIteration = (dropId: number, leftPercent: number, splatterY: number) => {
    // Create realistic rain splatter - flat on top, spreads horizontally and down
    const splatterCount = 3 + Math.floor(Math.random() * 4); // 3-6 characters
    const splatterChars = Array.from({ length: splatterCount }, () => {
      // Horizontal spread with slight downward bias
      const horizontalSpread = (Math.random() - 0.5) * 60; // -30px to +30px horizontal
      const verticalSpread = Math.random() * 15; // 0-15px downward only
      
      return {
        char: getRandomChar(),
        x: horizontalSpread,
        y: verticalSpread,
        delay: Math.random() * 0.2 // Random delay up to 0.2s
      };
    });
    
    const newSplatter: Splatter = {
      id: Date.now() + dropId,
      x: leftPercent,
      y: splatterY,
      characters: splatterChars,
      createdAt: Date.now()
    };
    
    setSplatters(prev => [...prev, newSplatter]);
  };

  // Characters for the rain text effect
  const rainChars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$',
    '%', '&', '*', '+', '-', '=', '?', '/', '\\', '|',
    '~', '`', '^', '<', '>', '[', ']', '{', '}', '(',
    ')', '.', ',', ':', ';', '"', "'", '_'
  ];

  const getRandomChar = () => rainChars[Math.floor(Math.random() * rainChars.length)];

  useEffect(() => {
    if (!isRaining) {
      setRainDrops([]);
      return;
    }

    const createRainDrop = (index: number): RainDrop => {
      // Snap to terminal grid columns (assuming ~80 characters wide)
      const columnCount = 80;
      const column = Math.floor(Math.random() * columnCount);
      const leftPercent = (column / columnCount) * 100;
      
      // Random splatter point in bottom 10% (90% - 100% of screen)
      const splatterY = 90 + Math.random() * 10;
      
      return {
        id: index,
        left: leftPercent,
        animationDuration: Math.random() * 1 + 0.5,
        delay: Math.random() * 8,
        text: getRandomChar(),
        splatterY
      };
    };

    const drops = Array.from({ length: intensity }, (_, index) => createRainDrop(index));
    setRainDrops(drops);

    // Update text content periodically
    const textUpdateInterval = setInterval(() => {
      if (isRaining) {
        setRainDrops(prev => 
          prev.map(drop => ({
            ...drop,
            text: getRandomChar()
          }))
        );
      }
    }, 800);


    // Clean up old splatters
    const splatterCleanup = setInterval(() => {
      const now = Date.now();
      setSplatters(prev => prev.filter(splatter => now - splatter.createdAt < 1000));
    }, 500);

    return () => {
      clearInterval(textUpdateInterval);
      clearInterval(splatterCleanup);
    };
  }, [isRaining, intensity]);

  if (!isRaining) {
    return null;
  }

  return (
    <div className="rain-container">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            top: '-50px',
            animationDuration: `${drop.animationDuration}s`,
            animationDelay: `${drop.delay}s`,
            '--splatter-y': `${drop.splatterY}vh`
          } as React.CSSProperties}
          onAnimationIteration={() => handleAnimationIteration(drop.id, drop.left, drop.splatterY!)}
        >
          {drop.text}
        </div>
      ))}
      
      {splatters.map((splatter) => (
        <div
          key={splatter.id}
          className="rain-splatter"
          style={{
            left: `${splatter.x}%`,
            top: `${splatter.y}vh`,
          }}
        >
          {splatter.characters.map((charData, index) => (
            <span
              key={index}
              className="splatter-char"
              style={{
                left: `${charData.x}px`,
                top: `${charData.y}px`,
                animationDelay: `${charData.delay}s`
              }}
            >
              {charData.char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};