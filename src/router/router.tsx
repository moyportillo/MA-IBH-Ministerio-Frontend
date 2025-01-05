import { createBrowserRouter } from 'react-router-dom';
import Root from '@/root';
import HomePage from '@/modules/home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home/*',
        children: [
          {
            path: '*',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
