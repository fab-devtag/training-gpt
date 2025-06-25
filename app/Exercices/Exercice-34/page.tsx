"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Post } from "./types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const fetchPost = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => fetchPost("https://jsonplaceholder.typicode.com/posts"),
  });

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
      <h1>Blog Post - Custom Hook Generic & React Query / SWR</h1>
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
