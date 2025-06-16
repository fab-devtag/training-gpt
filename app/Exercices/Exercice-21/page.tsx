"use client";
import { useState } from "react";
import { Product, products } from "./product";

type SelectablePRoduct = Product & { selected?: boolean };

export default function Home() {
  const [initialProducts, setProducts] =
    useState<SelectablePRoduct[]>(products);

  const selectedProduct = (productId: string) => {
    const updatedProduct = initialProducts.map((product) =>
      product.id === productId
        ? { ...product, selected: !product.selected }
        : product
    );
    setProducts(updatedProduct);
  };

  const deleteSelectedProduct = () => {
    const products = initialProducts.filter((product) => !product.selected);
    setProducts(products);
  };

  const selectAll = (value: boolean) => {
    const updatedProduct = initialProducts.map((product) => ({
      ...product,
      selected: value,
    }));

    setProducts(updatedProduct);
  };
  return (
    <div>
      <h1>Système de sélection multiple + suppression</h1>
      <div className="flex flex-col">
        {initialProducts.map((product) => (
          <div key={product.id} className="space-x-2">
            <span key={product.price}>{product.name}</span>
            <input
              type="checkbox"
              checked={!!product.selected}
              onChange={() => selectedProduct(product.id)}
            />
          </div>
        ))}
      </div>
      <button className="bg-amber-700" onClick={deleteSelectedProduct}>
        Supprimer les éléments sélectionnés
      </button>
      <button className="bg-amber-700 ml-4" onClick={() => selectAll(true)}>
        Tout sélectionner
      </button>
      <button className="bg-amber-700 ml-4" onClick={() => selectAll(false)}>
        Tout désélectionner
      </button>
    </div>
  );
}
