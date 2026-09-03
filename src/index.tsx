import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeGA } from './analytics';

// Initialize Google Analytics if measurement ID is provided
const gaId = process.env.REACT_APP_GA_MEASUREMENT_ID;
if (gaId) {
  initializeGA(gaId);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
