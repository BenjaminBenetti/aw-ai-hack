import React, { useState, useEffect } from 'react';
import { weatherService, WeatherData } from '../weather/service/weather-service.ts';
import { RainEffect } from '../weather/components/rain-effect.tsx';
import { TerminalHeader } from '../weather/components/terminal-header.tsx';

export const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await weatherService.getCurrentLocationWeather();
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="terminal-screen">
        <TerminalHeader status="LOADING WEATHER DATA..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="terminal-screen">
        <TerminalHeader status={`ERROR: ${error}`} showError={true} />
      </div>
    );
  }

  return (
    <div className="terminal-screen">
      {weatherData && (
        <RainEffect isRaining={weatherService.isRaining(weatherData.weatherCode)} intensity={60} />
      )}
      
      <div className="terminal-container">
        <TerminalHeader status="ACTIVE" />
        
        {weatherData && (
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
        )}
        
        <div className="terminal-footer">
          <pre>
{'└─────────────────────────────────────────────────────────────────────────────────┘'}
          </pre>
        </div>
      </div>
    </div>
  );
};