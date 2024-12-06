import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Application cannot start.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
