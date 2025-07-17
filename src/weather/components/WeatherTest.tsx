import React, { useState, useEffect } from 'react';
import { weatherService, WeatherData } from '../service/weather-service.ts';

export const WeatherTest: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await weatherService.getVictoriaWeather();
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading weather data for Victoria, BC...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Weather Test - Victoria, BC, Canada</h1>
      
      <h2>Formatted Weather Data:</h2>
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <p><strong>Location:</strong> {weatherData?.location}</p>
        <p><strong>Temperature:</strong> {weatherData?.temperature?.toFixed(1)}°C</p>
        <p><strong>Wind Speed:</strong> {weatherData?.windSpeed?.toFixed(1)} km/h</p>
        <p><strong>Wind Direction:</strong> {weatherData?.windDirection?.toFixed(0)}°</p>
        <p><strong>Weather Code:</strong> {weatherData?.weatherCode}</p>
      </div>

      <h2>Raw JSON Response:</h2>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px', 
        overflow: 'auto',
        fontSize: '12px',
        border: '1px solid #ccc'
      }}>
        {JSON.stringify(weatherData?.rawResponse, null, 2)}
      </pre>
    </div>
  );
};