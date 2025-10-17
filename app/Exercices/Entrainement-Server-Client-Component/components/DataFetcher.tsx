"use client";
import { ReactNode, useEffect, useState } from "react";

interface DataFetchProps<T> {
  url: string;
  children: (props: {
    data: T | null;
    loading: boolean;
    error: string | null;
  }) => ReactNode;
}
export const DataFetcher = <T,>({ url, children }: DataFetchProps<T>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Erreur HTTP : " + res.status);
        }
        const json = await res.json();
        setLoading(false);
        setData(json);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);
  return <>{children({ data, loading, error })}</>;
};

/* <DataFetcher url="/api/users">
  {({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    return <ul>{data.map(u => <li>{u.name}</li>)}</ul>;
  }}
</DataFetcher> */
