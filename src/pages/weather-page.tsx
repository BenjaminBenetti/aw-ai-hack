import React, { useState, useEffect } from 'react';
import { weatherService, WeatherData } from '../weather/service/weather-service.ts';
import { RainEffect } from '../weather/components/rain-effect.tsx';
import { TerminalHeader } from '../weather/components/terminal-header.tsx';
import { WeatherTerminal } from '../weather/components/weather-terminal.tsx';
import { LocationDropdown, LocationOption, PREDEFINED_LOCATIONS } from '../weather/components/location-dropdown.tsx';

export const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationOption>(PREDEFINED_LOCATIONS[0]);

  // Load saved location from localStorage on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('weather-location');
    if (savedLocation) {
      try {
        const parsedLocation = JSON.parse(savedLocation);
        setSelectedLocation(parsedLocation);
      } catch (err) {
        console.error('Failed to parse saved location:', err);
      }
    }
  }, []);

  // Fetch weather when location changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data: WeatherData;
        if (selectedLocation.isCurrentLocation) {
          data = await weatherService.getCurrentLocationWeather();
        } else if (selectedLocation.latitude && selectedLocation.longitude) {
          data = await weatherService.getWeatherForLocation(
            selectedLocation.latitude,
            selectedLocation.longitude,
            selectedLocation.name
          );
        } else {
          throw new Error('Invalid location data');
        }
        
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedLocation]);

  const handleLocationChange = (location: LocationOption) => {
    setSelectedLocation(location);
  };

  if (loading) {
    return (
      <div className="terminal-screen">
        <div className="location-dropdown-container">
          <LocationDropdown 
            selectedLocation={selectedLocation}
            onLocationChange={handleLocationChange}
          />
        </div>
        <div className="header-container">
          <TerminalHeader status="LOADING WEATHER DATA..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="terminal-screen">
        <div className="location-dropdown-container">
          <LocationDropdown 
            selectedLocation={selectedLocation}
            onLocationChange={handleLocationChange}
          />
        </div>
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
      
      <div className="location-dropdown-container">
        <LocationDropdown 
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
        />
      </div>
      
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