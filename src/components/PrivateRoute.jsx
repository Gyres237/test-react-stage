import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  // Si l'utilisateur est authentifié, on affiche le contenu de la route (grâce à Outlet).Sinon, on le redirige vers la page de connexion.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;