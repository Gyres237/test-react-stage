import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggleButton from './ThemeToggleButton';

import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    // On utilise Flexbox pour s'assurer que le contenu s'étire sur toute la hauteur
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Application
          </Typography>
          <ThemeToggleButton />
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout}>Déconnexion</Button>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Connexion
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          py: 2, 
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;