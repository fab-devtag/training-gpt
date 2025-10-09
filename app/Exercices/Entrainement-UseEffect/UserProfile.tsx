import { useState, useEffect } from "react";

// Problème 2
export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // Quel est le problème ?

  return <div>{user?.name}</div>;
}
