import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'; 
import App from './App.jsx';
import PostDetail from './components/PostDetail.jsx';
import './index.css';

const router = createBrowserRouter([
  
  { path: "/", element: <App /> },
  { path: "/posts/:postId", element: <PostDetail /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* <-- 2. ENGLOBER */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);