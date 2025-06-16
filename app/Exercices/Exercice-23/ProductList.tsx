import { Product } from "./products";

interface Props {
  products: Product[];
  addToFavorites: (favorite: Product) => void;
}
const ProductList = ({ products, addToFavorites }: Props) => {
  return (
    <div>
      {products.map((product) => (
        <div className="flex gap-2" key={product.id}>
          <h1>{product.name}</h1>
          <button
            onClick={() => addToFavorites(product)}
            className="bg-cyan-400 text-black"
          >
            Ajouter / Retirer
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
