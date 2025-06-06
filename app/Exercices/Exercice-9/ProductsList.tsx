import ProductItem from "./ProductItem";
import { Product } from "./types";

interface Props {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, addToCart }: Props) => {
  return (
    <div>
      <h1 className="text-2xl mb-3">Liste produits avec panier simple</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
