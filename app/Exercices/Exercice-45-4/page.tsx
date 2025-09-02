"use client";
import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
};

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      name: "Pain",
    },
    {
      id: 2,
      name: "Pâtes",
    },
    {
      id: 3,
      name: "Riz",
    },
    {
      id: 4,
      name: "Brocolis",
    },
  ];

  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
  }, [searchProduct]);

  const highlightText = (text: string) => {
    if (!searchProduct) return text;
    const regex = new RegExp(`(${searchProduct})`, "gi");
    return text
      .split(regex)
      .map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : part
      );
  };

  return (
    <div>
      <h1>45-4 - Mini Live Coding : ProductSearch & Highlight text</h1>
      <div>
        <h2>Liste des produits</h2>
        <div>
          <label>Recherche : </label>
          <input
            className="bg-white text-black"
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        {filteredProducts.map((product) => (
          <p key={product.id}>{highlightText(product.name)}</p>
        ))}
      </div>
    </div>
  );
}
