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
  private static readonly VICTORIA_BC_COORDS = {
    latitude: 48.4284,
    longitude: -123.3656
  };

  async getVictoriaWeather(): Promise<WeatherData> {
    const params = {
      latitude: [WeatherService.VICTORIA_BC_COORDS.latitude],
      longitude: [WeatherService.VICTORIA_BC_COORDS.longitude],
      current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
      timezone: 'America/Vancouver'
    };

    const url = 'https://api.open-meteo.com/v1/forecast';
    
    try {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      
      // Access current weather data
      const current = response.current()!;
      
      const weatherData: WeatherData = {
        location: 'Victoria, BC, Canada',
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
}

export const weatherService = new WeatherService();