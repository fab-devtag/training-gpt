"use client";

import { ArticlesProvider } from "./articlesContext";
import { ArticlesList } from "./ArticlesList";

export default function ArticlesPage() {
  return (
    <ArticlesProvider>
      <ArticlesList />
    </ArticlesProvider>
  );
}
