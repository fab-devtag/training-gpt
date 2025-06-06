"use client";
import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { CartItem, Product } from "./types";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Figurine Sasuke",
      price: 50,
    },
    {
      id: 2,
      name: "Dragon Ball",
      price: 420,
    },
    {
      id: 3,
      name: "Ramen",
      price: 10,
    },
    {
      id: 4,
      name: "PC",
      price: 300,
    },
    {
      id: 5,
      name: "Canapé",
      price: 100,
    },
    {
      id: 6,
      name: "Lunettes de soleil",
      price: 25,
    },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart([...updatedCart]);
    }
  };

  return (
    <div className="ml-4 mt-3 space-y-10">
      <ProductsList products={products} addToCart={addToCart} />
      <div>
        <h1 className="text-2xl ">Mon panier</h1>
        {cart.length === 0 ? (
          <p>Le panier est vide</p>
        ) : (
          cart.map((item) => <Cart key={item.id} item={item} />)
        )}
        <p>
          Total du panier :{" "}
          {cart.reduce((sum, item) => item.price * item.quantity + sum, 0)}
        </p>
      </div>
    </div>
  );
}
