import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ui/App.tsx';
import './css/base.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
