import { Product } from "./types";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div>
      <h1>Liste des produits</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>{product.name}&nbsp;</span>
            <span>{product.price}&nbsp;</span>
            <span>{product.category}&nbsp;</span>
            <span>{product.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
