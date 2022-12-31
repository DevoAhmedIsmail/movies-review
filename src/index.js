import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomeRoot from './pages/HomeRoot';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: 'discover',
        element: <Discover />
      },
      {
        path: 'popular',
        element: <Popular />
      },
      {
        path: 'top-rated',
        element: <TopRated />
      },
      {
        path: 'upcoming',
        element: <Upcoming />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
