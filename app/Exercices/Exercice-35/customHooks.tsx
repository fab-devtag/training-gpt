import { useQuery } from "@tanstack/react-query";

export const useFetch = <T,>(url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["data", url],
    queryFn: async () => {
      return fetch(url).then((res) => res.json());
    },
  });

  return { data, error, isLoading };
};
