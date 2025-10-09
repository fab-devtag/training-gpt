"use client";
import { useFetch } from "./useFetch";

function UserProfile({ userId }: { userId: number }) {
  const {
    data: user,
    loading,
    error,
    refetch,
  } = useFetch<User>(`/api/users/${userId}`);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <button onClick={refetch}>Rafraîchir</button>
    </div>
  );
}

interface User {
  id: number;
  name: string;
  email: string;
}
