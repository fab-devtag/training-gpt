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
      setError(e instanceof Error ? e : new Error(String(e)));
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
