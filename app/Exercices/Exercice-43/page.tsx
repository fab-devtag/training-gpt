"use client";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("Tous");
  const products = [
    {
      id: 1,
      name: "chaise 1",
      category: "chaise",
    },
    {
      id: 2,
      name: "table 1",
      category: "table",
    },
    {
      id: 3,
      name: "lampe 1",
      category: "lampe",
    },
    {
      id: 4,
      name: "chaise 2",
      category: "chaise",
    },
    {
      id: 5,
      name: "table 2",
      category: "table",
    },
    {
      id: 6,
      name: "lampe 2",
      category: "lampe",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filter === "Tous") return true;
      return product.category === filter;
    });
  }, [filter]);

  const handleChange = useCallback((e: string) => {
    setFilter(e);
  }, []);

  return (
    <div>
      <h1>UseMemo et useCallback</h1>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="Tous">Tous</option>
        <option value="chaise">chaise</option>
        <option value="table">table</option>
        <option value="lampe">lampe</option>
      </select>
      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
