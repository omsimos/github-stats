import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
