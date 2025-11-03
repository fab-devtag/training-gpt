import { useCallback, useEffect, useState } from "react";

interface UseAsyncResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: () => Promise<void>;
}

export const useAsync = <T>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true
): UseAsyncResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    try {
      const res = await asyncFunction();
      if (!res) throw new Error("Error during fetch");
      setData(res);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return {
    data: data,
    loading: loading,
    error: error,
    execute: execute,
  };
};

/* 


Je ne comprend pas trop quand on passe la fonction fetchUser, parce que j'ai l'impression qu'on lui passe la fonction qui retourne le résdultat déjà, donc comme si on passait déjà le result res.json(), ce n'est pas du coup l'array ou l'utilisateur ? Quand on retourne res.json c'est la promesse ?  
Après j'avoue que y'a beaucoup d'exercice j'arrive à les faire mais parce tu fournis la structure de base, je sais pas si c'est bien ou pas
*/
