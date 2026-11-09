import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Scan from './pages/Scan.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { EcoScoreProvider } from './context/EcoScoreContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'scan',
        element: <Scan />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcoScoreProvider>
      <RouterProvider router={router} />
    </EcoScoreProvider>
  </StrictMode>,
);
