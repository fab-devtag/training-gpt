import useSWR from "swr";

export const useFetch = <T,>(url: string) => {
  const { data, error, isLoading } = useSWR<T>(
    url,
    async (url: string) => await fetch(url).then((res) => res.json()),
    { fallbackData: [] as T }
  );

  return { data, error, isLoading };
};
