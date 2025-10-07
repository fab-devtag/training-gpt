import { useEffect, useState } from "react";

// TODO: Ce hook sauvegarde une valeur dans localStorage
// Il doit être générique (type T)
// Il retourne [T, (value: T) => void]

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  // TODO: implémentez
  // 1. Lisez localStorage au premier render
  // 2. Si la clé existe, parsez et retournez la valeur
  // 3. Sinon, utilisez initialValue
  // 4. La fonction de mise à jour doit sauvegarder dans localStorage
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      setData(JSON.parse(storage));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key]);

  const saveData = (donnees: T) => {
    localStorage.setItem(key, JSON.stringify(donnees));
    setData(donnees);
  };

  return [data, saveData];
};
