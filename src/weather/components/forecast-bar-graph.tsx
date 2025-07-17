import React from 'react';
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

  const createBar = (value: number, day: DailyForecastData, index: number) => {
    const percentage = range > 0 ? ((value - scaleMin) / range) * 100 : 0;
    const barWidth = Math.max(1, Math.round(percentage * 0.3)); // Scale down for terminal
    const barChar = '█';
    const emptyChar = '·';
    const maxBarWidth = 30;
    
    const filledBars = barChar.repeat(Math.min(barWidth, maxBarWidth));
    const emptyBars = emptyChar.repeat(Math.max(0, maxBarWidth - barWidth));
    
    const dayName = new Date(day.date + 'T00:00:00').toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
    const formattedValue = metric === 'temperature' 
      ? `${value.toFixed(1)}${getMetricUnit()}`
      : `${value.toFixed(metric === 'precipitation' ? 1 : 0)}${getMetricUnit()}`;

    return (
      <div key={index} className="forecast-bar-row">
        <span className="forecast-day">{dayName}</span>
        <span className="forecast-bar">
          [<span className="bar-filled">{filledBars}</span><span className="bar-empty">{emptyBars}</span>]
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