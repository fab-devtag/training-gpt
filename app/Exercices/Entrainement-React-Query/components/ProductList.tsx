"use client";
import { useProducts } from "../hooks/useProducts";

export const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} className="h-48 w-full object-contain" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export const ProductCount = () => {
  const { data: products } = useProducts();
  return <p>Il y a {products?.length} produits</p>;
};
