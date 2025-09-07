/**
 * Main Application Entry Point
 * @author Saurabh Kashyap
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Application configuration and initialization
 */
// const AppConfig = {
//   strictMode: true,
//   enableConcurrentFeatures: true
// };

/**
 * Initialize and render the React application
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Performance monitoring and reporting
 * Uncomment the lines below to enable performance monitoring
 */
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);