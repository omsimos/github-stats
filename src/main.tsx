import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import App from './App';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
);
