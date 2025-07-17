import React, { CSSProperties } from 'react';

interface FrostedGlassProps {
  children: React.ReactNode;
  blur?: number;
  opacity?: number;
  borderColor?: string;
  borderOpacity?: number;
  borderRadius?: number;
  padding?: string;
  className?: string;
  style?: CSSProperties;
}

export const FrostedGlass: React.FC<FrostedGlassProps> = ({
  children,
  blur = 15,
  opacity = 0.3,
  borderColor = '#ff1493',
  borderOpacity = 0.5,
  borderRadius = 8,
  padding = '20px',
  className = '',
  style = {},
}) => {
  const frostedStyle: CSSProperties = {
    background: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(${hexToRgb(borderColor)}, ${borderOpacity})`,
    borderRadius: `${borderRadius}px`,
    padding: padding,
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    ...style,
  };

  return (
    <div className={`frosted-glass ${className}`} style={frostedStyle}>
      {children}
    </div>
  );
};

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255, 20, 147'; // Default to neon pink if parsing fails
}