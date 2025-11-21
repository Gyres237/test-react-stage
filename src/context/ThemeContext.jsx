import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks/useToggle';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, toggleTheme] = useToggle(false); // Commence en light mode par défaut

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};