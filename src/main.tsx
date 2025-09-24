import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { rootRoute } from './routes/__root.tsx';
import { timeRoute } from './routes/time.tsx';

const routeTree = rootRoute.addChildren([timeRoute]);
const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
