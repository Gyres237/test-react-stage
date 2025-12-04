import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'; 
import { AppThemeProvider } from './context/ThemeContext';

import App from './App.jsx';
import PostDetail from './components/PostDetail.jsx';
import LoginPage from './components/LoginPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; 
import './index.css';

const router = createBrowserRouter([
  // Routes publiques
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <App />,
  },
  // Routes protégées
  {
    element: <PrivateRoute />, 
    children: [ 
      {
        path: "/posts/:postId",
        element: <PostDetail />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider> 
      <AuthProvider> 
        <RouterProvider router={router} />
      </AuthProvider>
   </AppThemeProvider> 
  </React.StrictMode>
);