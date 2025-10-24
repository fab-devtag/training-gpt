import { useAddToCart } from "../hooks/useAddToCard";

export const AddToCartButton = ({ productId }: { productId: number }) => {
  const { mutate, isPending } = useAddToCart();
  return (
    <button onClick={() => mutate(productId)} disabled={isPending}>
      {isPending ? "Adding" : "Add to Cart"}
    </button>
  );
};
