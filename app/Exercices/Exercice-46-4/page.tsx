"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [page, setPage] = useState(2);

  const fetchPosts = (page = 1) =>
    fetch(`http://localhost:3000/api/posts?page=${page}`).then((res) =>
      res.json()
    );

  const { isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <h1>
        46-4 - Mini Live Coding : Pagination côté serveur avec React Query
      </h1>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div>
          {data.posts.map((post: Post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      )}
      <div className="space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Précédent
        </button>
        <button
          disabled={!data?.hasMore}
          onClick={() => {
            if (!data.hasMore) {
              setPage((prev) => prev + 1);
            }
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
