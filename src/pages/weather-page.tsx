import React, { useState, useEffect } from 'react';
import { weatherService, WeatherData } from '../weather/service/weather-service.ts';
import { RainEffect } from '../weather/components/rain-effect.tsx';
import { TerminalHeader } from '../weather/components/terminal-header.tsx';
import { WeatherTerminal } from '../weather/components/weather-terminal.tsx';

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
        <div className="header-container">
          <TerminalHeader status="LOADING WEATHER DATA..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="terminal-screen">
        <div className="header-container">
          <TerminalHeader status={`ERROR: ${error}`} showError />
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-screen">
      {weatherData && (
        <RainEffect isRaining={weatherService.isRaining(weatherData.weatherCode)} intensity={60} />
      )}
      
      <div className="header-container">
        <TerminalHeader status="ACTIVE" />
      </div>
      
      <div className="main-terminal-container">
        {weatherData && (
          <WeatherTerminal weatherData={weatherData} />
        )}
      </div>
    </div>
  );
};