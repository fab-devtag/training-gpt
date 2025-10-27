"use client";
import { useMemo, useState } from "react";
import { Product } from "./page";

export const FilteredList = ({ products }: { products: Product[] }) => {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  const filteredList = useMemo(() => {
    console.log("render filtered");
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.sort((a, b) => a.price - b.price);
  }, [search, products]);

  return (
    <div>
      <div onClick={() => setCounter(counter + 1)}>Increment - {counter}</div>
      <input
        className="bg-white text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      <div className="flex flex-col">
        {filteredList.map((product) => (
          <span key={product.id}>
            {product.name} - {product.price}
          </span>
        ))}
      </div>
    </div>
  );
};
