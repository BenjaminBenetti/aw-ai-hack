import { fetchWeatherApi } from 'openmeteo';

export interface WeatherData {
  location: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  rawResponse: any;
}

export interface DailyForecastData {
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  precipitationSum: number;
  windSpeedMax: number;
  weatherCode: number;
}

export interface ForecastData {
  location: string;
  daily: DailyForecastData[];
  rawResponse: any;
}

export class WeatherService {
  
  isRaining(weatherCode: number): boolean {
    // Weather codes for rain conditions (based on WMO codes)
    const rainCodes = [
      51, 53, 55, // Drizzle
      56, 57,     // Freezing drizzle
      61, 63, 65, // Rain
      66, 67,     // Freezing rain
      80, 81, 82, // Rain showers
      95, 96, 97  // Thunderstorm
    ];
    return rainCodes.includes(weatherCode);
  }

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

  async get7DayForecast(latitude: number, longitude: number, locationName?: string): Promise<ForecastData> {
    const params = {
      latitude: [latitude],
      longitude: [longitude],
      daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code',
      timezone: 'auto',
      forecast_days: 7
    };

    const url = 'https://api.open-meteo.com/v1/forecast';
    
    try {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      
      // Access daily forecast data
      const daily = response.daily()!;
      const dailyData: DailyForecastData[] = [];
      
      // Get data for each day
      for (let i = 0; i < 7; i++) {
        dailyData.push({
          date: new Date(Number(daily.time(i)) * 1000).toISOString().split('T')[0],
          temperatureMax: daily.variables(0)!.valuesArray()![i], // temperature_2m_max
          temperatureMin: daily.variables(1)!.valuesArray()![i], // temperature_2m_min
          precipitationSum: daily.variables(2)!.valuesArray()![i], // precipitation_sum
          windSpeedMax: daily.variables(3)!.valuesArray()![i], // wind_speed_10m_max
          weatherCode: daily.variables(4)!.valuesArray()![i], // weather_code
        });
      }
      
      const forecastData: ForecastData = {
        location: locationName || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        daily: dailyData,
        rawResponse: {
          latitude: response.latitude(),
          longitude: response.longitude(),
          elevation: response.elevation(),
          timezone: response.timezone(),
          timezoneAbbreviation: response.timezoneAbbreviation(),
          daily: {
            time: Array.from({length: 7}, (_, i) => new Date(Number(daily.time(i)) * 1000).toISOString()),
            temperature_2m_max: daily.variables(0)!.valuesArray()!.slice(0, 7),
            temperature_2m_min: daily.variables(1)!.valuesArray()!.slice(0, 7),
            precipitation_sum: daily.variables(2)!.valuesArray()!.slice(0, 7),
            wind_speed_10m_max: daily.variables(3)!.valuesArray()!.slice(0, 7),
            weather_code: daily.variables(4)!.valuesArray()!.slice(0, 7),
          }
        }
      };
      
      return forecastData;
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      throw new Error(`Failed to fetch forecast data: ${error.message}`);
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

  getCurrentLocationForecast(): Promise<ForecastData> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const forecastData = await this.get7DayForecast(
              latitude,
              longitude,
              'Current Location'
            );
            resolve(forecastData);
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