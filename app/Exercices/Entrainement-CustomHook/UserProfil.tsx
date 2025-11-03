"use client";
import { useCallback } from "react";
import { useAsync } from "./useAsync";

export const UserProfil = ({ userId }: { userId: number }) => {
  const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    return res.json();
  }, [userId]);

  const { data: user, loading, error, execute } = useAsync(fetchUser);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>{user?.title}</p>
      <button onClick={execute}>Refresh</button>
    </div>
  );
};
