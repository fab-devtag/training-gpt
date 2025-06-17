"use client";
import { useCallback, useState } from "react";
import ProductList from "./ProductList";

import FavoriteList from "./FavoriteList";
import { Product, products } from "./products";

export default function Home() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const addOrRemove = useCallback(
    (favorite: Product) => {
      const find = favorites.find((fav) => fav.id === favorite.id);

      if (!find) {
        setFavorites([...favorites, favorite]);
      } else {
        const updatedFavorites = favorites.filter(
          (fav) => fav.id !== favorite.id
        );
        setFavorites(updatedFavorites);
      }
    },
    [favorites]
  );

  const filterFavorites =
    maxPrice > 0 ? favorites.filter((fav) => fav.price < maxPrice) : favorites;

  return (
    <div>
      <h1>Filtrage dynamique des favoris par prix</h1>
      <input
        className="bg-white text-black"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(parseInt(e.target.value) || 0)}
      />
      <ProductList products={products} addToFavorites={addOrRemove} />
      <FavoriteList favorites={filterFavorites} />
      <button className="bg-red-500" onClick={() => setFavorites([])}>
        Vider les favoris
      </button>
      <h2>{favorites.length} favoris</h2>
      <button className="bg-green-400" onClick={() => setMaxPrice(0)}>
        Reset filtre
      </button>
    </div>
  );
}
