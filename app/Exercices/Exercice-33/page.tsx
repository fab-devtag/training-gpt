"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Post } from "./types";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error, mutate } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterPosts = useMemo(() => {
    return (data ?? []).filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const addPost = async () => {
    const newPost: Post = {
      id: Date.now(),
      title: "Nouveau Post",
      body: "Ceci est un nouveau post",
    };

    mutate([newPost, ...(data ?? [])], false);
  };

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <div>
      <h1>Blog Post - Custom Hook Generic & React Query / SWR</h1>
      <div>
        <button onClick={addPost}>Ajouter un post</button>
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
