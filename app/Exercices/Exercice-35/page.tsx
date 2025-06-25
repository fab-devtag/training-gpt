"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Post } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "./customHooks";

export default function Home() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterPosts = useMemo(() => {
    return (data ?? []).filter((post: Post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const addPost = async () => {
    const newPost: Post = {
      id: Date.now(),
      title: "Nouveau Post",
      body: "Ceci est un nouveau post",
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error pendant le fetch post");
      }

      console.log(await response.json());

      //Ici met à jour les données dans le cache react query
      /*  queryClient.setQueryData<Post[]>(["posts"], (oldData) => [
        newPost,
        ...(oldData ?? []),
      ]); */
    } catch (e) {
      console.log("error pendant post");
    }
  };

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      //force un rerender depuis le serveur si besoin
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <div>
      <h1>=Blog Post - Custom hook genric avec React Query</h1>
      <div>
        <button
          onClick={() => {
            mutation.mutate();
          }}
        >
          Ajouter un post
        </button>
        <input
          className="bg-white text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filterPosts.map((post: Post) => (
          <Link key={post.id} href={`/Exercices/Exercice-32/posts/${post.id}`}>
            <p>Titre: {post.title}</p>
            <p>Contenu: {post.body.slice(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
