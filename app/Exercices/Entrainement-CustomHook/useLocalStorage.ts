"use client";
import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const value = localStorage.getItem(key);
      console.log(value);
      if (value) setStoredValue(JSON.parse(value));
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Calculer la nouvelle valeur
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Mettre à jour le state
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
