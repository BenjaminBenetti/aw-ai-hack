import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherTest } from './weather/components/WeatherTest.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WeatherTest />
  </React.StrictMode>
);