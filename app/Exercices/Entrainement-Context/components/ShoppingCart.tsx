"use client";

import { useCartContext } from "../contexts/CartContext";

export const ShoppingCart = () => {
  const { addItem, removeItem, state, clearCart, applyDiscount } =
    useCartContext();
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const finalTotal = total * (1 - state.discount / 100);

  return (
    <div className="space-x-2">
      <p>{total}</p>
      <p>{finalTotal}</p>
      <button onClick={() => addItem({ id: 1, name: "Figurine", price: 50 })}>
        Ajout de produit
      </button>
      <button onClick={() => removeItem(1)}>Supprimer un produit</button>
      <button onClick={clearCart}>Vider le panier</button>
      <button onClick={() => applyDiscount(20)}>Appliquer une réduction</button>
      <div>
        {state.items.map((item) => (
          <div key={item.id} className="space-x-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
