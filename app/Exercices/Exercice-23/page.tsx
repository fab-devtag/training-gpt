"use client";
import { useCallback, useState } from "react";
import ProductList from "./ProductList";
import { Product, products } from "./products";
import FavoriteList from "./FavoriteList";

export default function Home() {
  const [favorites, setFavorites] = useState<Product[]>([]);

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

  return (
    <div>
      <h1>Gestion des favoris sans doublons</h1>
      <ProductList products={products} addToFavorites={addOrRemove} />
      <FavoriteList favorites={favorites} />
      <button className="bg-red-500" onClick={() => setFavorites([])}>
        Vider les favoris
      </button>
      <h2>{favorites.length} favoris</h2>
    </div>
  );
}
