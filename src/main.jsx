import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import AppRouter from './App';
import { BrowserRouter } from 'react-router-dom';
import { CollapsibleContextProvider } from './context/collapsible';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UseContextProvider } from './context/userContentx';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById(
    "the-root-node-of-the-dom-tree-it's-me-just-writing-some-bad-code-here"
  )
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <UseContextProvider>
          <QueryClientProvider client={queryClient}>
            <ProSidebarProvider>
              <CollapsibleContextProvider>
                <Layout>
                  <AppRouter />
                </Layout>
              </CollapsibleContextProvider>
            </ProSidebarProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </UseContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
