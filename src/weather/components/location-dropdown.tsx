import React, { useState, useEffect, useRef } from 'react';

export interface LocationOption {
  id: string;
  name: string;
  latitude?: number;
  longitude?: number;
  isCurrentLocation?: boolean;
}

interface LocationDropdownProps {
  selectedLocation: LocationOption;
  onLocationChange: (location: LocationOption) => void;
}

const PREDEFINED_LOCATIONS: LocationOption[] = [
  { id: 'current', name: 'Current Location', isCurrentLocation: true },
  { id: 'vancouver', name: 'Vancouver', latitude: 49.2827, longitude: -123.1207 },
  { id: 'toronto', name: 'Toronto', latitude: 43.6532, longitude: -79.3832 },
  { id: 'newyork', name: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { id: 'losangeles', name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  { id: 'tokyo', name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
  { id: 'london', name: 'London', latitude: 51.5074, longitude: -0.1278 },
  { id: 'paris', name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  { id: 'sydney', name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
  { id: 'reykjavik', name: 'Reykjavik', latitude: 64.1466, longitude: -21.9426 },
  { id: 'miami', name: 'Miami', latitude: 25.7617, longitude: -80.1918 },
  { id: 'hongkong', name: 'Hong Kong', latitude: 22.3193, longitude: 114.1694 },
  { id: 'singapore', name: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
  { id: 'amsterdam', name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041 },
  { id: 'berlin', name: 'Berlin', latitude: 52.5200, longitude: 13.4050 }
];

export const LocationDropdown: React.FC<LocationDropdownProps> = ({
  selectedLocation,
  onLocationChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationSelect = (location: LocationOption) => {
    onLocationChange(location);
    setIsOpen(false);
    
    // Store selection in localStorage
    localStorage.setItem('weather-location', JSON.stringify(location));
  };

  return (
    <div className="location-dropdown" ref={dropdownRef}>
      <button 
        className="location-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="location-name">{selectedLocation.name}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="location-dropdown-menu">
          {PREDEFINED_LOCATIONS.map((location) => (
            <button
              key={location.id}
              className={`location-option ${selectedLocation.id === location.id ? 'selected' : ''}`}
              onClick={() => handleLocationSelect(location)}
              type="button"
            >
              {location.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { PREDEFINED_LOCATIONS };