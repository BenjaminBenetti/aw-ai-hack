import React from 'react';
import { ForecastMetric } from './forecast-bar-graph.tsx';
import { TerminalButton, TerminalButtonGroup } from '../components/terminal-button.tsx';

interface ForecastButtonsProps {
  currentMetric: ForecastMetric;
  onMetricChange: (metric: ForecastMetric) => void;
}

export const ForecastButtons: React.FC<ForecastButtonsProps> = ({ currentMetric, onMetricChange }) => {
  const metrics: { key: ForecastMetric; label: string }[] = [
    { key: 'temperature', label: 'TEMP' },
    { key: 'precipitation', label: 'RAIN' },
    { key: 'wind', label: 'WIND' }
  ];

  return (
    <TerminalButtonGroup 
      prompt="forecast --mode="
      buttons={metrics.map(metric => ({
        id: metric.key,
        label: metric.label,
        isActive: currentMetric === metric.key,
        onClick: () => onMetricChange(metric.key)
      }))}
    />
  );
};