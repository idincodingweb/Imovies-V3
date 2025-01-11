// Import React dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import main application component and styles
import App from './App.jsx';
import './assets/style/App.css';

// Render the application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);