import { fetchWeatherApi } from 'openmeteo';

export interface WeatherData {
  location: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  rawResponse: any;
}

export class WeatherService {

  async getWeatherForLocation(latitude: number, longitude: number, locationName?: string): Promise<WeatherData> {
    const params = {
      latitude: [latitude],
      longitude: [longitude],
      current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
      timezone: 'auto'
    };

    const url = 'https://api.open-meteo.com/v1/forecast';
    
    try {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      
      // Access current weather data
      const current = response.current()!;
      
      const weatherData: WeatherData = {
        location: locationName || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        temperature: current.variables(0)!.value(), // temperature_2m
        windSpeed: current.variables(2)!.value(), // wind_speed_10m
        windDirection: current.variables(3)!.value(), // wind_direction_10m
        weatherCode: current.variables(1)!.value(), // weather_code
        rawResponse: {
          latitude: response.latitude(),
          longitude: response.longitude(),
          elevation: response.elevation(),
          timezone: response.timezone(),
          timezoneAbbreviation: response.timezoneAbbreviation(),
          current: {
            time: new Date(Number(current.time()) * 1000).toISOString(),
            temperature_2m: current.variables(0)!.value(),
            weather_code: current.variables(1)!.value(),
            wind_speed_10m: current.variables(2)!.value(),
            wind_direction_10m: current.variables(3)!.value(),
          }
        }
      };
      
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  }

  getCurrentLocationWeather(): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const weatherData = await this.getWeatherForLocation(
              latitude,
              longitude,
              'Current Location'
            );
            resolve(weatherData);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          let errorMessage = 'Unable to retrieve your location.';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out.';
              break;
          }
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  }
}

export const weatherService = new WeatherService();