"use client";

import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";
import { Product, ProductInCart, products } from "./products";

export default function Home() {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addToCart = (product: Product) => {
    let item = cart.find((element) => element.id === product.id);
    if (item) {
      const updatedCart = cart.map((element) =>
        element.id === product.id
          ? { ...element, quantity: item.quantity + 1 }
          : element
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalCartPrice = useMemo(() => {
    return cart.reduce(
      (total, currentValue) =>
        total + currentValue.price * currentValue.quantity,
      0
    );
  }, [cart]);

  const subTotal = useCallback((product: ProductInCart) => {
    return product.price * product.quantity;
  }, []);

  const removeOne = (item: ProductInCart) => {
    if (item.quantity === 1) {
      const updatedArray = cart.filter((product) => product.id !== item.id);
      setCart([...updatedArray]);
    } else {
      const updatedArray = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedArray);
    }
  };
  return (
    <div>
      <h1>Panier avec gestion des quantités</h1>
      <ProductList products={products} addToCart={addToCart} />
      {cart.length > 0 && (
        <h2>
          {cart.length} articles - Total : {totalCartPrice}€
        </h2>
      )}
      <button className="bg-blue-500" onClick={() => setCart([])}>
        Vider le panier
      </button>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h1>
              {product.name} - {product.quantity} quantité - Sous Total :{" "}
              {subTotal(product)}
            </h1>
            <button
              onClick={() => removeOne(product)}
              className="bg-green-400 text-black"
            >
              Réduire de 1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
