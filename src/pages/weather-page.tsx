import React, { useState, useEffect } from 'react';
import { weatherService, WeatherData } from '../weather/service/weather-service.ts';
import { RainEffect } from '../weather/components/rain-effect.tsx';

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
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="weather-page">
      {weatherData && (
        <RainEffect isRaining={weatherService.isRaining(weatherData.weatherCode)} intensity={60} />
      )}
      
      <div className="weather-container">
        <h1 className="page-title">Weather</h1>
        
        {weatherData && (
          <div className="weather-display">
            <div className="location">{weatherData.location}</div>
            <div className="temperature">{weatherData.temperature.toFixed(1)}°C</div>
            <div className="weather-details">
              <div className="wind-speed">Wind: {weatherData.windSpeed.toFixed(1)} km/h</div>
              <div className="wind-direction">Direction: {weatherData.windDirection.toFixed(0)}°</div>
              <div className="weather-code">Code: {weatherData.weatherCode}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};