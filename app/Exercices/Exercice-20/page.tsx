"use client";

import { useMemo, useState } from "react";
import ProductList from "./ProductList";
import { Product, products } from "./products";

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const totalCartPrice = useMemo(() => {
    return cart.reduce((total, currentValue) => total + currentValue.price, 0);
  }, [cart]);

  return (
    <div>
      <h1>Catalogue de produits avec ajout au panier</h1>
      <ProductList products={products} addToCart={addToCart} />
      {cart.length > 0 && (
        <h2>
          {cart.length} articles - Total : {totalCartPrice}€
        </h2>
      )}
      <button onClick={() => setCart([])}>Vider le panier</button>
    </div>
  );
}
