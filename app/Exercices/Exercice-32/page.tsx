"use client";
import Link from "next/link";
import { useFetch } from "./customHooks";
import { useMemo, useState } from "react";
import { Post } from "./types";

export default function Home() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterPosts = useMemo(() => {
    return (data ?? []).filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading....</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>Blog Post - Custom Hook Generic & React Query / SWR</h1>
      <div>
        <input
          className="bg-white text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filterPosts.map((post) => (
          <Link key={post.id} href={`/Exercices/Exercice-32/posts/${post.id}`}>
            <p>Titre: {post.title}</p>
            <p>Contenu: {post.body.slice(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
