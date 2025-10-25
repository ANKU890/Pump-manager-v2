import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(Could not resolve "./components/SettingsModal" from "src/App.tsx");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
