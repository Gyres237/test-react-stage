import React, { createContext, useContext, useMemo } from 'react';
import { useToggle } from '../hooks/useToggle';

// importation des outils de theming de MUI
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeToggleContext = createContext();

export const AppThemeProvider = ({ children }) => {
  const [isDarkMode, toggleTheme] = useToggle('theme-mode', false);

  
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
    }),
    [isDarkMode]
  );

  
  React.useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
   
    <ThemeToggleContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};