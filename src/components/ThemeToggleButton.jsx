import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Passer en mode Light' : 'Passer en mode Dark'}
    </button>
  );
};

export default ThemeToggleButton;