"use client";

import { useEffect, useMemo, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await posts.json();
        setPosts(response);
        setLoading(false);
      } catch (err) {
        setError("Erreur pendant la récupération des posts");
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const filteredPosts = useMemo(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;
  }, [searchTerm, posts]);

  const slicedPosts = useMemo(() => {
    const sliced = [...filteredPosts].slice(
      (currentPage - 1) * postPerPage,
      currentPage * postPerPage
    );
    return sliced;
  }, [filteredPosts, currentPage, postPerPage]);

  const totalPages = Math.ceil(filteredPosts.length / postPerPage);
  const showNext = currentPage < totalPages;

  return (
    <div>
      <h1>Exercice Test Live Coding Interview - 2</h1>
      {error && <span>{error}</span>}
      {loading && <span>Chargement des posts...</span>}
      <div>
        <label>Recherche par titre : </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {slicedPosts.length > 0
          ? slicedPosts.map((post) => (
              <div key={post.id}>
                <span>#{post.id}</span>
                <h2>Titre : {post.title}</h2>
                <p>Contenu : {post.body.slice(0, 30)}...</p>
              </div>
            ))
          : !loading && <p>Aucun résultat trouvé</p>}
      </div>
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage((prev) => prev - 1)}>
          Précédent&nbsp;
        </button>
      )}
      {showNext && (
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>
          Suivant
        </button>
      )}
    </div>
  );
}
