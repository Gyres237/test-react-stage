import { useState, useEffect } from 'react';

export const useToggle = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);

      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Erreur lors de la lecture du localStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors de l\'écriture dans le localStorage', error);
    }
  }, [value, key]);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};