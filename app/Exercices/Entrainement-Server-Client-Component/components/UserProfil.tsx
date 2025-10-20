import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((json) => setUser(json))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
};

export const UserProfile = () => {
  const { loading, user } = useUser();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Pas de user</div>;
  return <div>{user.name}</div>;
};
