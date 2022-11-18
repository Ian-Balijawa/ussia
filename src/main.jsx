import './index.css';

import AppRouter from './App';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Navbar />
      <RouterProvider router={AppRouter} />
      <Footer />
    </HelmetProvider>
  </React.StrictMode>
);
