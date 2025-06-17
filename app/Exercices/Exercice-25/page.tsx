"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "./ProductList";

import FavoriteList from "./FavoriteList";
import { Product, products } from "./products";

export default function Home() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    try {
      const localFavorites = localStorage.getItem("favorites");
      if (localFavorites) {
        setFavorites(JSON.parse(localFavorites));
      }
    } catch (e) {
      console.error("Erreur lecture localStorage", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addOrRemove = useCallback((favorite: Product) => {
    setFavorites((prevFavorites) => {
      const find = prevFavorites.find((fav) => fav.id === favorite.id);

      if (!find) {
        return [...prevFavorites, favorite];
      } else {
        return prevFavorites.filter((fav) => fav.id !== favorite.id);
      }
    });
  }, []);

  const finalFavorites = useMemo(() => {
    return favorites.filter((fav) => {
      const matchesName = fav.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice = maxPrice > 0 ? fav.price < maxPrice : true;
      return matchesName && matchesPrice;
    });
  }, [searchTerm, maxPrice, favorites]);

  const resetAllFilters = () => {
    setMaxPrice(0);
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Filtrage dynamique des favoris par prix</h1>
      <div className="flex gap-2 flex-col w-48">
        <input
          className="bg-white text-black"
          type="text"
          placeholder="Rechercher par nom"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          className="bg-white text-black"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value) || 0)}
        />
      </div>
      <ProductList products={products} addToFavorites={addOrRemove} />
      <FavoriteList favorites={finalFavorites} />
      <button className="bg-red-500" onClick={() => setFavorites([])}>
        Vider les favoris
      </button>
      <h2>{favorites.length} favoris</h2>
      <button className="bg-green-400" onClick={resetAllFilters}>
        Reset filtre
      </button>
    </div>
  );
}
