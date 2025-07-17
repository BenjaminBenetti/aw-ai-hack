import React, { useState, useEffect } from 'react';
import { WeatherData, ForecastData, weatherService } from '../service/weather-service.ts';
import { ForecastBarGraph, ForecastMetric } from './forecast-bar-graph.tsx';
import { ForecastButtons } from './forecast-buttons.tsx';
import { FrostedGlass } from '../../ui/components/frosted-glass.tsx';

interface WeatherTerminalProps {
  weatherData: WeatherData;
  locationLatitude?: number;
  locationLongitude?: number;
  isCurrentLocation?: boolean;
}

export const WeatherTerminal: React.FC<WeatherTerminalProps> = ({ 
  weatherData, 
  locationLatitude, 
  locationLongitude, 
  isCurrentLocation = false 
}) => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [forecastLoading, setForecastLoading] = useState<boolean>(true);
  const [forecastError, setForecastError] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<ForecastMetric>('temperature');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setForecastLoading(true);
        setForecastError(null);
        
        let forecast: ForecastData;
        if (isCurrentLocation) {
          forecast = await weatherService.getCurrentLocationForecast();
        } else if (locationLatitude !== undefined && locationLongitude !== undefined) {
          forecast = await weatherService.get7DayForecast(
            locationLatitude,
            locationLongitude,
            weatherData.location
          );
        } else {
          throw new Error('Invalid location data for forecast');
        }
        
        setForecastData(forecast);
      } catch (err) {
        setForecastError(err instanceof Error ? err.message : 'Failed to fetch forecast data');
      } finally {
        setForecastLoading(false);
      }
    };

    fetchForecast();
  }, [locationLatitude, locationLongitude, isCurrentLocation, weatherData.location]);

  return (
    <FrostedGlass 
      className="terminal-container"
      blur={15}
      opacity={0.3}
      borderColor="#ff1493"
      borderOpacity={0.5}
      borderRadius={8}
      padding="0"
    >
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
    </FrostedGlass>
  );
};