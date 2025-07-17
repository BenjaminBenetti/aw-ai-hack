import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherPage } from './pages/weather-page.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WeatherPage />
  </React.StrictMode>
);