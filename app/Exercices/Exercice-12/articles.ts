export interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Comprendre React",
    content: "React est une bibliothèque JS...",
    category: "Tech",
    author: "Alice",
  },
  {
    id: 2,
    title: "Méditation quotidienne",
    content: "La méditation peut améliorer...",
    category: "Lifestyle",
    author: "Bob",
  },
  {
    id: 3,
    title: "Les hooks React",
    content: "Les hooks permettent de...",
    category: "Tech",
    author: "Charlie",
  },
  {
    id: 4,
    title: "Design minimaliste",
    content: "Un bon design commence par...",
    category: "Design",
    author: "Alice",
  },
];
