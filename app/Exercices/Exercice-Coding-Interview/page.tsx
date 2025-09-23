"use client";

import ProductList from "./ProductList";
import { useProducts } from "./useProducts";

export default function Home() {
  const {
    filteredProducts,
    productCategories,
    searchTerm,
    filterByCategory,
    setSearchTerm,
    sortedBy,
    setSortedBy,
    setFilteredByCategory,
  } = useProducts();

  return (
    <div>
      <h1>Exercice Test Live Coding Interview</h1>
      <div>
        <label>Rechercher par nom : </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label>Filter par catégorie : </label>
        <select
          defaultValue={filterByCategory}
          onChange={(e) => setFilteredByCategory(e.target.value)}
        >
          {productCategories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          style={{ fontWeight: sortedBy === "asc" ? "bold" : "" }}
          disabled={sortedBy === "asc"}
          onClick={() => setSortedBy("asc")}
        >
          ASC&nbsp;
        </button>
        <button
          style={{ fontWeight: sortedBy === "desc" ? "bold" : "" }}
          disabled={sortedBy === "desc"}
          onClick={() => setSortedBy("desc")}
        >
          DESC
        </button>
      </div>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>Aucun produit trouvé</p>
      )}
    </div>
  );
}
