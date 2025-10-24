import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: number) => {
      const res = await fetch("api/cart", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
