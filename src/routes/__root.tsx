import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
