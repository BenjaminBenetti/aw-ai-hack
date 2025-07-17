import React, { useState } from 'react';
import { weatherService, WeatherData } from '../service/weather-service.ts';

export const WeatherTest: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [customLat, setCustomLat] = useState<string>('');
  const [customLng, setCustomLng] = useState<string>('');


  const fetchCurrentLocationWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getCurrentLocationWeather();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomLocationWeather = async () => {
    const lat = parseFloat(customLat);
    const lng = parseFloat(customLng);
    
    if (isNaN(lat) || isNaN(lng)) {
      setError('Please enter valid latitude and longitude values');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getWeatherForLocation(lat, lng);
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Weather Test - Location Methods</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Test Different Weather Methods:</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <button 
            type="button"
            onClick={fetchCurrentLocationWeather}
            style={{ 
              marginRight: '10px', 
              padding: '10px 15px', 
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Get Current Location Weather
          </button>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <h3>Custom Location:</h3>
          <input
            type="number"
            placeholder="Latitude"
            value={customLat}
            onChange={(e) => setCustomLat(e.target.value)}
            style={{ 
              marginRight: '10px', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ccc' 
            }}
          />
          <input
            type="number"
            placeholder="Longitude"
            value={customLng}
            onChange={(e) => setCustomLng(e.target.value)}
            style={{ 
              marginRight: '10px', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ccc' 
            }}
          />
          <button 
            type="button"
            onClick={fetchCustomLocationWeather}
            style={{ 
              padding: '8px 15px', 
              backgroundColor: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
          >
            Get Custom Location Weather
          </button>
        </div>
      </div>

      {weatherData && (
        <>
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
        </>
      )}
    </div>
  );
};