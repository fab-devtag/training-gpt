"use client";
import { useEffect, useState } from "react";

/* Plusieurs questions : 
Je n'ai pas compris pourquoi on utilsie pas un useEffect ici
Je comprends pas quand tu demandes de gérer le cas ou value est une fonction
J'ai mis useEffect parce que sinon j'avais une erryer Hydratation error
Avant le as const en bas j'avais des erreurs sur le ThemeSwitcher

Impossible d'assigner le type '"light" | "dark" | ((value: "light" | "dark" | ((val: "light" | "dark") => "light" | "dark")) => void)' au type 'ReactNode'.
  Impossible d'assigner le type '(value: "light" | "dark" | ((val: "light" | "dark") => "light" | "dark")) => void' au type 'ReactNode'.
  
  Impossible d'appeler cette expression.
  Tous les constituants de type '"light" | "dark" | ((value: "light" | "dark" | ((val: "light" | "dark") => "light" | "dark")) => void)' ne peuvent pas être appelés.
    Le type '"light"' n'a aucune signature d'appel.
  
    Je ne comprends pas trop pourquoi

    Aussi pourquoi je retourne un array et pas un objet comme d'habitude ? */

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const value = localStorage.getItem(key);
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
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
