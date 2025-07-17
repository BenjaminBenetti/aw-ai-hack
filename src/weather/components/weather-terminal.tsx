import React from 'react';
import { WeatherData } from '../service/weather-service.ts';

interface WeatherTerminalProps {
  weatherData: WeatherData;
}

export const WeatherTerminal: React.FC<WeatherTerminalProps> = ({ weatherData }) => {
  return (
    <div className="terminal-container">
      <div className="terminal-content">
        <div className="terminal-prompt">
          <span className="prompt-symbol">$</span> weather --location={weatherData.location}
        </div>
        
        <div className="terminal-output">
          <div className="data-section">
            <div className="section-header">[CURRENT CONDITIONS]</div>
            <div className="data-row">
              <span className="data-label">TEMPERATURE:</span>
              <span className="data-value">{weatherData.temperature.toFixed(1)}°C</span>
            </div>
            <div className="data-row">
              <span className="data-label">WIND SPEED:</span>
              <span className="data-value">{weatherData.windSpeed.toFixed(1)} km/h</span>
            </div>
            <div className="data-row">
              <span className="data-label">WIND DIRECTION:</span>
              <span className="data-value">{weatherData.windDirection.toFixed(0)}°</span>
            </div>
            <div className="data-row">
              <span className="data-label">WEATHER CODE:</span>
              <span className="data-value">{weatherData.weatherCode}</span>
            </div>
          </div>
          
          <div className="terminal-prompt">
            <span className="prompt-symbol">$</span> <span className="cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};