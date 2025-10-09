import { useState, useEffect } from "react";

// Exercice 3.3
function FetchUser({ userId }: { userId: number }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setUser(data); // Problème si userId change pendant le fetch !
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [userId]);

  return loading ? <div>Chargement...</div> : <div>{user?.name}</div>;
}
// TODO: Gérez le cas où userId change pendant le fetch (race condition)
