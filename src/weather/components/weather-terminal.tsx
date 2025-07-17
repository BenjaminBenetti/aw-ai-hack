import React, { useState, useEffect } from 'react';
import { WeatherData, ForecastData, weatherService } from '../service/weather-service.ts';
import { ForecastBarGraph, ForecastMetric } from './forecast-bar-graph.tsx';
import { ForecastButtons } from './forecast-buttons.tsx';

interface WeatherTerminalProps {
  weatherData: WeatherData;
}

export const WeatherTerminal: React.FC<WeatherTerminalProps> = ({ weatherData }) => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [forecastLoading, setForecastLoading] = useState<boolean>(true);
  const [forecastError, setForecastError] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<ForecastMetric>('temperature');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setForecastLoading(true);
        setForecastError(null);
        const forecast = await weatherService.getCurrentLocationForecast();
        setForecastData(forecast);
      } catch (err) {
        setForecastError(err instanceof Error ? err.message : 'Failed to fetch forecast data');
      } finally {
        setForecastLoading(false);
      }
    };

    fetchForecast();
  }, []);

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

          {forecastLoading && (
            <div className="data-section">
              <div className="section-header">[LOADING FORECAST...]</div>
            </div>
          )}

          {forecastError && (
            <div className="data-section">
              <div className="section-header error">[FORECAST ERROR: {forecastError}]</div>
            </div>
          )}

          {forecastData && !forecastLoading && !forecastError && (
            <>
              <div className="forecast-section">
                <ForecastBarGraph 
                  forecastData={forecastData.daily}
                  metric={selectedMetric}
                />
                <ForecastButtons 
                  currentMetric={selectedMetric}
                  onMetricChange={setSelectedMetric}
                />
              </div>
            </>
          )}
          
          <div className="terminal-prompt">
            <span className="prompt-symbol">$</span> <span className="cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};