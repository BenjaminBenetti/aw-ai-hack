import React, { useState, useEffect, useRef } from 'react';
import { weatherService, WeatherData } from '../weather/service/weather-service.ts';
import { RainEffect } from '../weather/components/rain-effect.tsx';
import { TerminalHeader } from '../weather/components/terminal-header.tsx';
import { WeatherTerminal } from '../weather/components/weather-terminal.tsx';
import { LocationDropdown, LocationOption, PREDEFINED_LOCATIONS } from '../weather/components/location-dropdown.tsx';

interface LocationWeatherData {
  location: LocationOption;
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const WeatherPage: React.FC = () => {
  const [selectedLocations, setSelectedLocations] = useState<LocationOption[]>([]);
  const [locationWeatherData, setLocationWeatherData] = useState<LocationWeatherData[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const previousSelectedLocationsRef = useRef<LocationOption[]>([]);

  // Load saved locations from localStorage on mount
  useEffect(() => {
    const savedLocations = localStorage.getItem('weather-locations');
    if (savedLocations) {
      try {
        const parsedLocations = JSON.parse(savedLocations);
        if (Array.isArray(parsedLocations) && parsedLocations.length > 0) {
          setSelectedLocations(parsedLocations);
        } else {
          // If saved locations is empty array or invalid, default to Current Location
          setSelectedLocations([PREDEFINED_LOCATIONS[0]]);
        }
      } catch (err) {
        console.error('Failed to parse saved locations:', err);
        // On parse error, default to Current Location
        setSelectedLocations([PREDEFINED_LOCATIONS[0]]);
      }
    } else {
      // No saved locations, default to Current Location
      setSelectedLocations([PREDEFINED_LOCATIONS[0]]);
    }
    setIsInitialized(true);
  }, []);

  // Fetch weather for selected locations (only fetch new ones)
  useEffect(() => {
    // Don't run until we've loaded from localStorage
    if (!isInitialized) return;
    
    const updateLocationWeatherData = async () => {
      if (selectedLocations.length === 0) {
        setLocationWeatherData([]);
        previousSelectedLocationsRef.current = [];
        return;
      }

      // Get previous location IDs
      const previousLocationIds = previousSelectedLocationsRef.current.map(loc => loc.id);
      const selectedLocationIds = selectedLocations.map(loc => loc.id);

      // Find locations to add (new selections)
      const locationsToAdd = selectedLocations.filter(loc => !previousLocationIds.includes(loc.id));
      
      // Find locations to remove (deselected)
      const locationIdsToRemove = previousLocationIds.filter(id => !selectedLocationIds.includes(id));

      // Remove deselected locations
      if (locationIdsToRemove.length > 0) {
        setLocationWeatherData(prev => 
          prev.filter(item => !locationIdsToRemove.includes(item.location.id))
        );
      }

      // Add new locations with loading state
      if (locationsToAdd.length > 0) {
        const newLocationData: LocationWeatherData[] = locationsToAdd.map(location => ({
          location,
          weatherData: null,
          loading: true,
          error: null
        }));

        setLocationWeatherData(prev => [...prev, ...newLocationData]);

        // Fetch weather for new locations only
        const weatherPromises = locationsToAdd.map(async (location) => {
          try {
            let data: WeatherData;
            if (location.isCurrentLocation) {
              data = await weatherService.getCurrentLocationWeather();
            } else if (location.latitude && location.longitude) {
              data = await weatherService.getWeatherForLocation(
                location.latitude,
                location.longitude,
                location.name
              );
            } else {
              throw new Error('Invalid location data');
            }

            // Update the specific location's data
            setLocationWeatherData(prev => 
              prev.map(item => 
                item.location.id === location.id
                  ? { ...item, weatherData: data, loading: false, error: null }
                  : item
              )
            );
          } catch (err) {
            // Update the specific location's error
            setLocationWeatherData(prev => 
              prev.map(item => 
                item.location.id === location.id
                  ? { ...item, loading: false, error: err instanceof Error ? err.message : 'Failed to fetch weather data' }
                  : item
              )
            );
          }
        });

        await Promise.all(weatherPromises);
      }

      // Update the reference for next comparison
      previousSelectedLocationsRef.current = selectedLocations;
    };

    updateLocationWeatherData();
  }, [selectedLocations, isInitialized]);

  const handleLocationsChange = (locations: LocationOption[]) => {
    setSelectedLocations(locations);
  };

  // Check if any locations are currently loading
  const anyLoading = locationWeatherData.some(item => item.loading);
  
  // Check if we have any weather data with rain to show rain effect
  const hasRainEffect = locationWeatherData.some(item => 
    item.weatherData && weatherService.isRaining(item.weatherData.weatherCode)
  );

  return (
    <div className="terminal-screen">
      {hasRainEffect && (
        <RainEffect isRaining intensity={60} />
      )}
      
      <div className="location-dropdown-container">
        <LocationDropdown 
          selectedLocations={selectedLocations}
          onLocationsChange={handleLocationsChange}
        />
      </div>
      
      <div className="header-container">
        <TerminalHeader status={anyLoading ? "LOADING WEATHER DATA..." : "ACTIVE"} />
      </div>
      
      <div className="multi-terminal-container">
        {locationWeatherData.length === 0 ? (
          <div className="no-locations-message">
            <p>Select locations from the dropdown to view weather data</p>
          </div>
        ) : (
          locationWeatherData.map((locationData) => (
            <div key={locationData.location.id} className="terminal-tile">
              {locationData.loading && (
                <div className="terminal-loading">
                  <p>Loading {locationData.location.name}...</p>
                </div>
              )}
              {locationData.error && (
                <div className="terminal-error">
                  <p>Error loading {locationData.location.name}:</p>
                  <p>{locationData.error}</p>
                </div>
              )}
              {locationData.weatherData && !locationData.loading && !locationData.error && (
                <WeatherTerminal 
                  weatherData={locationData.weatherData}
                  locationLatitude={locationData.location.latitude}
                  locationLongitude={locationData.location.longitude}
                  isCurrentLocation={locationData.location.isCurrentLocation || false}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};