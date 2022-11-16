import './index.css';

import AppRouter from './App';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={AppRouter} />
    </HelmetProvider>
  </React.StrictMode>
);
