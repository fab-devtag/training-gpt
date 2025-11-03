"use client";
import { useFetch } from "./useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserList = () => {
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
