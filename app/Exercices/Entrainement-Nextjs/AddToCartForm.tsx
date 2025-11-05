"use client";

import { useState } from "react";

export const AddToCartForm = ({ productId }: { productId: number }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId: productId, quantity }),
    });
  };
  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
