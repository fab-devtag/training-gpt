import { useState, useEffect } from "react";

// Problème 5
export function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((p) => p.name.includes(filter));

  useEffect(() => {
    console.log("Filtered products:", filteredProducts);
  }, [filteredProducts]); // Quel est le problème ?

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
