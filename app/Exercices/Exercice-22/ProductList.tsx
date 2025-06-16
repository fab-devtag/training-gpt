import { Product } from "./products";

interface Props {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, addToCart }: Props) => {
  return (
    <div className="space-y-2 mt-5">
      {products.map((product) => (
        <div className="flex gap-2 items-center" key={product.id}>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <button
            className="bg-amber-500 text-black p-1"
            onClick={() => addToCart(product)}
          >
            Ajouter
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
