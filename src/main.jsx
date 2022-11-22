import './index.css';

import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRouter from './App';
import { CollapsibleContextProvider } from './context/collapsible';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ProSidebarProvider>
          <CollapsibleContextProvider>
            <Layout>
              <QueryClientProvider client={queryClient}>
                <AppRouter />
              </QueryClientProvider>
            </Layout>
          </CollapsibleContextProvider>
        </ProSidebarProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
