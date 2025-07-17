import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherPage } from './pages/weather-page.tsx';
import { ParallaxBackground } from './ui/components/parallax-background.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ParallaxBackground />
    <WeatherPage />
  </React.StrictMode>
);