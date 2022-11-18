import './index.css';

import AppRouter from './App';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CollapsibleContextProvider } from './context/collapsible';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ProSidebarProvider>
        <CollapsibleContextProvider>
          <Layout>
            <RouterProvider router={AppRouter} />
          </Layout>
        </CollapsibleContextProvider>
      </ProSidebarProvider>
    </HelmetProvider>
  </React.StrictMode>
);
