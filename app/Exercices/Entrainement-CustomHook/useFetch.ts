import { useCallback, useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (signal?: AbortSignal) => {
      setError("");
      try {
        const res = await fetch(url, { signal });
        console.log(res);
        if (!res.ok) throw new Error("Erreur pendant le fetch");
        const json = await res.json();
        console.log("json", json);
        setData(json);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.log("error", error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: refetch,
  };
};
