import './index.css';

import AppRouter from './App';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={AppRouter} />
    </HelmetProvider>
  </React.StrictMode>
);
