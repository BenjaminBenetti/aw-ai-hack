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
}

export const RainEffect: React.FC<RainEffectProps> = ({ isRaining, intensity = 50 }) => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

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
      
      return {
        id: index,
        left: leftPercent,
        animationDuration: Math.random() * 6 + 4,
        delay: Math.random() * 8,
        text: getRandomChar()
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

    return () => clearInterval(textUpdateInterval);
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
          }}
        >
          {drop.text}
        </div>
      ))}
    </div>
  );
};