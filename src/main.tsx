import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/base.css';
import { Sample } from './repo.ts';
import { App } from './ui/App.tsx';

/**
 * Render
 */
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App docRef={Sample.handle} />
  </React.StrictMode>,
);
