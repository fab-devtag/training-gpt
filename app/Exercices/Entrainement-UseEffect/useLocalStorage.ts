import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // TODO: Lire localStorage au premier render
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    // TODO: Sauvegarder dans state et localStorage
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    // TODO: Écouter l'événement 'storage' pour sync entre onglets
    // Quand un autre onglet change la valeur, mettre à jour ici aussi
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key) {
        if (e.newValue) {
          setStoredValue(JSON.parse(e.newValue));
        } else {
          setStoredValue(initialValue);
        }
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [key]);

  return [storedValue, setValue];
}
