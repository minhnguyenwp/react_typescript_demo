/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from 'react-query';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';
import { GameProvider } from 'contexts';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient();

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GameProvider>
          <App />
        </GameProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
