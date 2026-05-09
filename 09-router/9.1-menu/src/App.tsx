import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout }     from './layouts/RootLayout';
import { HomePage }       from './pages/HomePage';
import { DriftPage }      from './pages/DriftPage';
import { TimeAttackPage } from './pages/TimeAttackPage';
import { ForzaPage }      from './pages/ForzaPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,         element: <HomePage />       },
      { path: 'drift',       element: <DriftPage />      },
      { path: 'timeattack',  element: <TimeAttackPage /> },
      { path: 'forza',       element: <ForzaPage />      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}