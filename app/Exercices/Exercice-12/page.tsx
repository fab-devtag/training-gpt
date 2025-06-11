"use client";

import { articles } from "./articles";
import ArticleItem from "./ArticleItem";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("Tous");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = articles.map((article) => article.category);
  let filterButtons = ["Tous", ...new Set(categories)];

  const filteredArticles = articles.filter((article) => {
    if (filter === "Tous") return true;
    return article.category === filter;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (a.author < b.author) return sortOrder === "asc" ? -1 : 1;
    if (a.author > b.author) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const finalArticles = sortedArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (finalArticles.length === 0) return <div>Aucun article trouvé.</div>;
  return (
    <div>
      <h1>Mini Entretien - Blog</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        {filterButtons.map((categorie) => (
          <span
            key={categorie}
            className={`${filter === categorie ? "font-bold" : ""}`}
            onClick={() => setFilter(categorie)}
          >
            {categorie}
          </span>
        ))}
      </div>
      <div className="space-x-3">
        <button
          className={`${sortOrder === "asc" ? "font-bold" : ""}`}
          onClick={() => setSortOrder("asc")}
        >
          Croissant
        </button>
        <button
          className={`${sortOrder === "desc" ? "font-bold" : ""}`}
          onClick={() => setSortOrder("desc")}
        >
          Décroissant
        </button>
      </div>
      <div>
        {finalArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
