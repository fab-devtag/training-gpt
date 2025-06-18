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
  const [deletingPostId, setDeletingPostId] = useState<number | null>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

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
      const posts = (await response.json()).map((post: Post) => ({
        ...post,
        like: 0,
      }));
      setPosts(posts);
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

  const deletePost = async (postId: number) => {
    setError("");
    setDeletingPostId(postId);
    const value = window.confirm("Voulez-vous vraiment supprimer ce post ?");
    if (!value) return;

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }
      const updatedPosts = posts.filter((p) => p.id !== postId);
      setPosts(updatedPosts);
    } catch (e) {
      setError("Erreur lors de la suppression du post");
    } finally {
      setDeletingPostId(null);
    }
  };

  const editPost = async (title: string, body: string, id: number) => {
    setError("");
    setEditingPostId(id);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title, body: body }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }

      const updatedArray = posts.map((post) =>
        post.id === id ? { ...post, title: title, body: body } : post
      );

      setPosts(updatedArray);
    } catch (e) {
      setError("Erreur lors de la modification du post");
    } finally {
      setEditingPostId(null);
    }
  };

  const likePost = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, like: post.like + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const resetLikes = () => {
    const updatedPosts = posts.map((post) => ({ ...post, like: 0 }));
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
      <button className="bg-amber-800 p-2 text-white" onClick={resetLikes}>
        Reset Likes
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length > 0 && (
        <PostList
          posts={posts}
          onDeletePost={deletePost}
          onEditPost={editPost}
          deletingPostId={deletingPostId}
          editingPostId={editingPostId}
          onLike={likePost}
        />
      )}
    </div>
  );
}
