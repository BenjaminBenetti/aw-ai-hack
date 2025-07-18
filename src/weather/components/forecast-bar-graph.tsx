import React, { JSX } from 'react';
import { DailyForecastData } from '../service/weather-service.ts';

export type ForecastMetric = 'temperature' | 'precipitation' | 'wind';

interface ForecastBarGraphProps {
  forecastData: DailyForecastData[];
  metric: ForecastMetric;
}

export const ForecastBarGraph: React.FC<ForecastBarGraphProps> = ({ forecastData, metric }) => {
  const getMetricValue = (day: DailyForecastData): number => {
    switch (metric) {
      case 'temperature':
        return day.temperatureMax;
      case 'precipitation':
        return day.precipitationSum;
      case 'wind':
        return day.windSpeedMax;
      default:
        return 0;
    }
  };

  const getMetricLabel = (): string => {
    switch (metric) {
      case 'temperature':
        return 'TEMP °C';
      case 'precipitation':
        return 'RAIN mm';
      case 'wind':
        return 'WIND km/h';
      default:
        return '';
    }
  };

  const getMetricUnit = (): string => {
    switch (metric) {
      case 'temperature':
        return '°C';
      case 'precipitation':
        return 'mm';
      case 'wind':
        return 'km/h';
      default:
        return '';
    }
  };

  const values = forecastData.map(getMetricValue);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  
  // For temperature, use absolute scale; for others, use relative scale
  const scaleMin = metric === 'temperature' ? Math.min(0, minValue) : 0;
  const scaleMax = metric === 'temperature' ? Math.max(maxValue, 30) : maxValue;
  const range = scaleMax - scaleMin;

  const getRealisticRange = (metric: ForecastMetric): { min: number; max: number } => {
    switch (metric) {
      case 'temperature':
        return { min: -5, max: 45 }; // -5°C (very cold) to 45°C (very hot)
      case 'precipitation':
        return { min: 0, max: 40 }; // 0mm (dry) to 40mm (heavy rain)
      case 'wind':
        return { min: 0, max: 100 }; // 0 km/h (calm) to 100 km/h (very strong wind)
      default:
        return { min: 0, max: 100 };
    }
  };

  const getRealisticIntensity = (value: number, metric: ForecastMetric): number => {
    const realisticRange = getRealisticRange(metric);
    const { min, max } = realisticRange;
    
    // Clamp value to realistic range and calculate intensity (0 to 1)
    const clampedValue = Math.max(min, Math.min(max, value));
    return (clampedValue - min) / (max - min);
  };

  const getIntensityColor = (intensity: number): string => {
    // Base pink color (from #ff1493) - keep color constant, vary opacity
    const baseR = 255;
    const baseG = 20;
    const baseB = 147;
    
    // Create intensity variation by adjusting opacity/transparency
    // Lower values = more transparent, higher values = more opaque
    const minOpacity = 0.2; // Minimum opacity to maintain visibility
    const opacity = minOpacity + (intensity * (1 - minOpacity));
    
    return `rgba(${baseR}, ${baseG}, ${baseB}, ${opacity})`;
  };

  const getIntensityGlow = (intensity: number): string => {
    // Calculate glow intensity for text-shadow
    const glowIntensity = 0.2 + (intensity * 0.8); // Range from 0.2 to 1.0
    return `0 0 ${Math.round(glowIntensity * 6)}px currentColor`;
  };

  const createBar = (value: number, day: DailyForecastData, index: number) => {
    const percentage = range > 0 ? ((value - scaleMin) / range) * 100 : 0;
    const barWidth = Math.max(1, Math.round(percentage * 0.3)); // Scale down for terminal
    const barChar = '█';
    const emptyChar = '·';
    const maxBarWidth = 30;
    
    const dayName = new Date(day.date + 'T00:00:00').toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
    const formattedValue = metric === 'temperature' 
      ? `${value.toFixed(1)}${getMetricUnit()}`
      : `${value.toFixed(metric === 'precipitation' ? 1 : 0)}${getMetricUnit()}`;

    // Create gradient bars where each character has different intensity based on its position
    const createGradientBars = () => {
      const actualBarWidth = Math.min(barWidth, maxBarWidth);
      const gradientBars: JSX.Element[] = [];
      
      // Create each filled character with its own intensity
      for (let i = 0; i < actualBarWidth; i++) {
        // Calculate what scale value this character position represents
        const charPosition = i / maxBarWidth; // 0 to 1 based on position in max bar
        const charValue = scaleMin + (charPosition * range);
        
        // Calculate intensity based on realistic ranges for this metric
        const charIntensity = getRealisticIntensity(charValue, metric);
        
        const color = getIntensityColor(charIntensity);
        const glow = getIntensityGlow(charIntensity);
        
        gradientBars.push(
          <span
            key={i}
            style={{
              color: color,
              textShadow: glow
            }}
          >
            {barChar}
          </span>
        );
      }
      
      return gradientBars;
    };

    const emptyBars = emptyChar.repeat(Math.max(0, maxBarWidth - Math.min(barWidth, maxBarWidth)));

    return (
      <div key={index} className="forecast-bar-row">
        <span className="forecast-day">{dayName}</span>
        <span className="forecast-bar">
          [<span className="bar-filled">{createGradientBars()}</span><span className="bar-empty">{emptyBars}</span>]
        </span>
        <span className="forecast-value">{formattedValue}</span>
      </div>
    );
  };

  return (
    <div className="forecast-bar-graph">
      <div className="forecast-section-header">[7-DAY FORECAST - {getMetricLabel()}]</div>
      <div className="forecast-bars">
        {forecastData.map((day, index) => 
          createBar(getMetricValue(day), day, index)
        )}
      </div>
      <div className="forecast-scale">
        <span>MIN: {scaleMin.toFixed(1)}{getMetricUnit()}</span>
        <span className="forecast-scale-spacer"> | </span>
        <span>MAX: {scaleMax.toFixed(1)}{getMetricUnit()}</span>
      </div>
    </div>
  );
};