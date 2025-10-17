"use client";
import React, { useState } from "react";

interface ProductCartProps {
  productId: number;
  productTitle: string;
}
export const AddToCart = ({ productId, productTitle }: ProductCartProps) => {
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log(`Produit ${productId} ajouté au panier`);

    setLoading(false);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    });
  };
  return (
    <button
      onClick={addToCart}
      disabled={loading || added}
      className={`
        px-6 py-3 rounded-lg font-semibold transition-all
        ${
          added
            ? "bg-green-500 text-white"
            : loading
            ? "bg-gray-400 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }
        disabled:cursor-not-allowed
      `}
    >
      {loading && "⏳ Ajout en cours..."}
      {added && "✅ Ajouté au panier !"}
      {!loading && !added && "🛒 Ajouter au panier"}
    </button>
  );
};
