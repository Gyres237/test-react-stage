import React from 'react';
import { useThemeToggle } from '../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import Tooltip from '@mui/material/Tooltip';

const ThemeToggleButton = () => {
  const { toggleTheme, isDarkMode } = useThemeToggle();

  return (
    <Tooltip title={isDarkMode ? "Passer en mode light" : "Passer en mode dark"}>
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggleButton;