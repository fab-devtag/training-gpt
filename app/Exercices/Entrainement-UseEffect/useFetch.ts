"use client";
import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erreur dans la requête");
      const fetchData = await response.json();
      setData(fetchData);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      refetch();
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error, refetch };
};
