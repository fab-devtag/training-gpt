import { useQuery } from "@tanstack/react-query";

export const useFetch = <T,>(url: string) => {
  const fetcher = async () => await fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useQuery<T>({
    queryKey: ["data", url],
    queryFn: fetcher,
    placeholderData: (prev) => prev,
  });

  return { data, error, isLoading };
};
