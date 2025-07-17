import { assertEquals } from 'https://deno.land/std@0.208.0/assert/mod.ts';
import { WeatherService } from './weather-service.ts';

Deno.test('WeatherService - getWeatherDescription', async (t) => {
  const weatherService = new WeatherService();

  await t.step('should return correct descriptions for clear weather codes', () => {
    assertEquals(weatherService.getWeatherDescription(0), 'Clear sky');
    assertEquals(weatherService.getWeatherDescription(1), 'Mainly clear');
    assertEquals(weatherService.getWeatherDescription(2), 'Partly cloudy');
    assertEquals(weatherService.getWeatherDescription(3), 'Overcast');
  });

  await t.step('should return correct descriptions for fog codes', () => {
    assertEquals(weatherService.getWeatherDescription(45), 'Fog');
    assertEquals(weatherService.getWeatherDescription(48), 'Depositing rime fog');
  });

  await t.step('should return correct descriptions for drizzle codes', () => {
    assertEquals(weatherService.getWeatherDescription(51), 'Light drizzle');
    assertEquals(weatherService.getWeatherDescription(53), 'Moderate drizzle');
    assertEquals(weatherService.getWeatherDescription(55), 'Dense drizzle');
    assertEquals(weatherService.getWeatherDescription(56), 'Light freezing drizzle');
    assertEquals(weatherService.getWeatherDescription(57), 'Dense freezing drizzle');
  });

  await t.step('should return correct descriptions for rain codes', () => {
    assertEquals(weatherService.getWeatherDescription(61), 'Slight rain');
    assertEquals(weatherService.getWeatherDescription(63), 'Moderate rain');
    assertEquals(weatherService.getWeatherDescription(65), 'Heavy rain');
    assertEquals(weatherService.getWeatherDescription(66), 'Light freezing rain');
    assertEquals(weatherService.getWeatherDescription(67), 'Heavy freezing rain');
  });

  await t.step('should return correct descriptions for snow codes', () => {
    assertEquals(weatherService.getWeatherDescription(71), 'Slight snow fall');
    assertEquals(weatherService.getWeatherDescription(73), 'Moderate snow fall');
    assertEquals(weatherService.getWeatherDescription(75), 'Heavy snow fall');
    assertEquals(weatherService.getWeatherDescription(77), 'Snow grains');
    assertEquals(weatherService.getWeatherDescription(85), 'Slight snow showers');
    assertEquals(weatherService.getWeatherDescription(86), 'Heavy snow showers');
  });

  await t.step('should return correct descriptions for rain shower codes', () => {
    assertEquals(weatherService.getWeatherDescription(80), 'Slight rain showers');
    assertEquals(weatherService.getWeatherDescription(81), 'Moderate rain showers');
    assertEquals(weatherService.getWeatherDescription(82), 'Violent rain showers');
  });

  await t.step('should return correct descriptions for thunderstorm codes', () => {
    assertEquals(weatherService.getWeatherDescription(95), 'Thunderstorm');
    assertEquals(weatherService.getWeatherDescription(96), 'Thunderstorm with slight hail');
    assertEquals(weatherService.getWeatherDescription(99), 'Thunderstorm with heavy hail');
  });

  await t.step('should return unknown message for invalid weather codes', () => {
    assertEquals(weatherService.getWeatherDescription(999), 'Unknown weather condition (999)');
    assertEquals(weatherService.getWeatherDescription(-1), 'Unknown weather condition (-1)');
    assertEquals(weatherService.getWeatherDescription(42), 'Unknown weather condition (42)');
  });
});

Deno.test('WeatherService - isRaining', async (t) => {
  const weatherService = new WeatherService();

  await t.step('should return true for rain-related weather codes', () => {
    // Drizzle
    assertEquals(weatherService.isRaining(51), true);
    assertEquals(weatherService.isRaining(53), true);
    assertEquals(weatherService.isRaining(55), true);
    
    // Freezing drizzle
    assertEquals(weatherService.isRaining(56), true);
    assertEquals(weatherService.isRaining(57), true);
    
    // Rain
    assertEquals(weatherService.isRaining(61), true);
    assertEquals(weatherService.isRaining(63), true);
    assertEquals(weatherService.isRaining(65), true);
    
    // Freezing rain
    assertEquals(weatherService.isRaining(66), true);
    assertEquals(weatherService.isRaining(67), true);
    
    // Rain showers
    assertEquals(weatherService.isRaining(80), true);
    assertEquals(weatherService.isRaining(81), true);
    assertEquals(weatherService.isRaining(82), true);
    
    // Thunderstorm
    assertEquals(weatherService.isRaining(95), true);
    assertEquals(weatherService.isRaining(96), true);
    assertEquals(weatherService.isRaining(97), true);
  });

  await t.step('should return false for non-rain weather codes', () => {
    // Clear weather
    assertEquals(weatherService.isRaining(0), false);
    assertEquals(weatherService.isRaining(1), false);
    assertEquals(weatherService.isRaining(2), false);
    assertEquals(weatherService.isRaining(3), false);
    
    // Fog
    assertEquals(weatherService.isRaining(45), false);
    assertEquals(weatherService.isRaining(48), false);
    
    // Snow
    assertEquals(weatherService.isRaining(71), false);
    assertEquals(weatherService.isRaining(73), false);
    assertEquals(weatherService.isRaining(75), false);
    assertEquals(weatherService.isRaining(77), false);
    assertEquals(weatherService.isRaining(85), false);
    assertEquals(weatherService.isRaining(86), false);
    
    // Unknown codes
    assertEquals(weatherService.isRaining(999), false);
  });
});