// src/hooks/useToggle.js

import { useState } from 'react';

/**
 * Un hook personnalisé pour gérer un état booléen (on/off).
 * @param {boolean} initialValue - La valeur de départ (true ou false).
 * @returns {[boolean, () => void]} - Un tableau avec la valeur actuelle et une fonction pour la basculer.
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};