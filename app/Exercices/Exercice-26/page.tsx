"use client";
import { FormEvent, useEffect, useState } from "react";
import PostList from "./PostList";
import { Post } from "./types";
import AddPostForm from "./AddPostForm";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [addingPost, setAddingPost] = useState(false);

  useEffect(() => {
    reloadPost();
  }, []);

  const reloadPost = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }
      const posts = await response.json();
      setPosts(posts);
    } catch (e) {
      setError("Erreur lors du chargement des posts");
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (postTitle: string, postContent: string) => {
    setError("");
    setAddingPost(true);
    const post = { title: postTitle, body: postContent };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
    } catch (e) {
      setError("Erreur lors de l’ajout du post");
    } finally {
      setAddingPost(false);
    }
  };

  const deletePost = (postId: number) => {
    const value = window.confirm("Voulez-vous vraiment supprimer ce post ?");
    if (!value) return;
    const updatedPosts = posts.filter((p) => p.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Mini Feature API</h1>
      <button
        className="mt-5 bg-blue-500 p-2"
        onClick={reloadPost}
        disabled={loading}
      >
        {loading ? "Chargement..." : "Recharger"}
      </button>
      <AddPostForm addPost={addPost} addingPost={addingPost} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length > 0 && <PostList posts={posts} onDeletePost={deletePost} />}
    </div>
  );
}
