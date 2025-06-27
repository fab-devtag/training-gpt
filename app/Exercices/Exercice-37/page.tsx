"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Post } from "./types";
import { useFetch } from "./customHooks";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/queryClient";
import PostItem from "./PostItem";

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

  const addPost = async () => {
    const newPost: Post = {
      id: Date.now(),
      title: "Un nouveau post",
      body: "Je suis un contenu du nouveau post",
    };

    addMutation.mutate(newPost);
  };

  const deletePost = async (id: number) => {
    deleteMutation.mutate(id);
  };

  const editPost = async (id: number, title: string, body: string) => {
    console.log("edit");
    const editPost: Post = { id: id, title: title, body: body };
    console.log(editPost);
    editMutation.mutate(editPost);
  };

  const deleteMutation = useMutation({
    mutationFn: async (id: number) =>
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      }).then(() => id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
      const previousPosts = queryClient.getQueryData([
        "data",
        "https://jsonplaceholder.typicode.com/posts",
      ]);
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        (oldPost: Post[]) => oldPost.filter((post) => post.id !== id)
      );
      return previousPosts;
    },
    onError: (_err, _id, context) => {
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        context
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newPost: Post) =>
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
      const previousPosts = queryClient.getQueryData([
        "data",
        "https://jsonplaceholder.typicode.com/posts",
      ]);
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        (oldPost: Post[]) => [newPost, ...oldPost]
      );
      return previousPosts;
    },
    onError: (_err, _newPost, context) => {
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        context
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
    },
  });

  const editMutation = useMutation({
    mutationFn: async (editPost: Post) =>
      await fetch(`https://jsonplaceholder.typicode.com/posts/${editPost.id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: editPost.id,
          title: editPost.title,
          body: editPost.body,
        }),
      }).then((res) => {
        if (editPost.title.length < 3) {
          throw new Error("Le titre est trop court");
        }
        return res.json();
      }),
    onMutate: async (editPost: Post) => {
      await queryClient.cancelQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
      const oldData = queryClient.getQueryData([
        "data",
        "https://jsonplaceholder.typicode.com/posts",
      ]);
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        (oldPost: Post[]) =>
          oldPost.map((post) => (post.id === editPost.id ? editPost : post))
      );
      return oldData;
    },
    onError: (_err, _editPost, context) => {
      console.log(_err);
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        context
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
    },
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <div>
      <h1>
        Blog Post - Custom hook genric avec React Query et Navigation dynamique
        + useMutation
      </h1>
      <div>
        <button onClick={addPost}>Ajouter un post</button>
        <div>
          <label>Chercher un post</label>
          <input
            className="bg-white text-black"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p>{editMutation.error?.message}</p>
        {filterPosts.map((post: Post) => (
          <PostItem
            key={post.id}
            post={post}
            onDeletePost={deletePost}
            onEditPost={editPost}
          />
        ))}
      </div>
    </div>
  );
}
