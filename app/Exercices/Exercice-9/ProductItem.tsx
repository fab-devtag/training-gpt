import { Product } from "./types";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem = ({ product, addToCart }: Props) => {
  return (
    <div className="flex space-x-2 items-center">
      <p>{product.name}</p>
      <p className="font-bold text-yellow-400">{product.price}</p>
      <button
        className="bg-green-500 px-2 py-1 rounded-full text-green-950 hover:bg-green-300 cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Ajouter
      </button>
    </div>
  );
};

export default ProductItem;
