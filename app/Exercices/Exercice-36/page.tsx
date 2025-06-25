"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Post } from "./types";
import { useFetch } from "./customHooks";

export default function Home() {
  const { data, isLoading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterPosts = useMemo(() => {
    return (data ?? []).filter((post: Post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <div>
      <h1>
        Blog Post - Custom hook genric avec React Query et Navigation dynamique
      </h1>
      <div>
        <input
          className="bg-white text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filterPosts.map((post: Post) => (
          <Link key={post.id} href={`/Exercices/Exercice-36/posts/${post.id}`}>
            <p>Titre: {post.title}</p>
            <p>Contenu: {post.body.slice(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
