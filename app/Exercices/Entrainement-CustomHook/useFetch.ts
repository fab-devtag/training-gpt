import { useCallback, useEffect, useState } from "react";

//Si je mets null dans T | null je vais avoir une erreur si il n'ya aucune donnée non ? Je devrais pas plutôt faire [] à la place de null ?
// Ou alors le ? sur users? permet justement que si y'a pas d'élement il n'ya pas d'erreur ?
//tu m'as demandé également de parser le json mais j'en ai pas besoin du coup si ? Si je fais .json();
// Pour le abort je ne sais pas trop comment m'y prendre vu que je fais une autre fonction pour fetchData et pas directement dans le useEffect, je ne sais pas comment faire passer le signal

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
