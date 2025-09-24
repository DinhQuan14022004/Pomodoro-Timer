import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import TimerPage from '../pages/timer';

export const timeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timer',
  component: () => <TimerPage />,
});
