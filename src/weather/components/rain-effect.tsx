import React, { useEffect, useState } from 'react';

interface RainEffectProps {
  isRaining: boolean;
  intensity?: number;
}

export const RainEffect: React.FC<RainEffectProps> = ({ isRaining, intensity = 50 }) => {
  const [rainDrops, setRainDrops] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!isRaining) {
      setRainDrops([]);
      return;
    }

    const createRainDrop = (index: number) => {
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 1 + 0.5;
      const delay = Math.random() * 2;

      return (
        <div
          key={index}
          className="rain-drop"
          style={{
            left: `${left}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    };

    const drops = Array.from({ length: intensity }, (_, index) => createRainDrop(index));
    setRainDrops(drops);
  }, [isRaining, intensity]);

  if (!isRaining) {
    return null;
  }

  return (
    <div className="rain-container">
      {rainDrops}
    </div>
  );
};