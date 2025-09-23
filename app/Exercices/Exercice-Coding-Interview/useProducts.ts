"use client";

import { useState, useMemo } from "react";
import { Product } from "./types";

export const useProducts = () => {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200, rating: 5, category: "Tech" },
    { id: 2, name: "Phone", price: 800, rating: 4, category: "Tech" },
    { id: 3, name: "Shoes", price: 120, rating: 4, category: "Clothes" },
    { id: 4, name: "Pain", price: 1200, rating: 3, category: "Tech" },
    { id: 5, name: "Lait", price: 700, rating: 4, category: "Tech" },
    { id: 6, name: "Chorizo", price: 120, rating: 3, category: "Clothes" },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortedBy, setSortedBy] = useState<"asc" | "desc">("asc");
  const [filterByCategory, setFilteredByCategory] = useState<string>("Tout");

  const filteredProducts = useMemo(() => {
    let productsList = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((product) => {
        if (filterByCategory === "Tout") return true;
        return product.category
          .toLowerCase()
          .includes(filterByCategory.toLowerCase());
      });

    let finalProductsList = [...productsList].sort((a, b) => {
      if (sortedBy === "asc") {
        if (a.price === b.price) return b.rating - a.rating;
        return a.price - b.price;
      }

      if (sortedBy === "desc") {
        if (a.price === b.price) return b.rating - a.rating;
        return b.price - a.price;
      }

      return 0;
    });

    return finalProductsList;
  }, [products, searchTerm, sortedBy, filterByCategory]);

  const productCategories = useMemo(() => {
    let categories: string[] = ["Tout"];
    for (let product of products) {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }
    return categories;
  }, [products]);

  const getTopRatedProducts = (count: number) => {
    return [...products]
      .sort((a, b) => {
        if (a.rating === b.rating) return a.price - b.price;
        return b.rating - a.rating;
      })
      .slice(0, count);
  };

  /*  console.log(getTopRatedProducts(4));
   */
  const getProductsByCategory = () => {
    let list = new Map();

    for (let i = 0; i < products.length; i++) {
      if (list.has(products[i].category)) {
        list.set(products[i].category, [
          ...list.get(products[i].category),
          products[i],
        ]);
      } else {
        list.set(products[i].category, [products[i]]);
      }
    }

    return list;
  };

  console.log(getProductsByCategory());

  return {
    filteredProducts,
    productCategories,
    searchTerm,
    sortedBy,
    filterByCategory,
    setSearchTerm,
    setSortedBy,
    setFilteredByCategory,
  };
};
