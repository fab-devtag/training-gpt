"use client";
import { useEffect, useMemo, useState } from "react";

interface UserInventory {
  itemId: string;
  name: string;
  quantity: number;
}

export default function () {
  return (
    <div>
      <UserInventory />
    </div>
  );
}

export const UserInventory = () => {
  const [userInventory, setUserInventory] = useState<UserInventory[]>([
    { itemId: "1", name: "Potion", quantity: 3 },
    { itemId: "2", name: "Épée", quantity: 1 },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchUserInventory = async () => {
      setLoading(true);
      try {
        const response = await fetch("api/inventory/1");
        if (!response.ok) {
          throw new Error(
            `Erreur lors du chargement : ${response.status}${response.statusText}`,
          );
        }
        const data = await response.json();
        setUserInventory(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setError("Une erreur inconnue est survenue");
        setLoading(false);
      }
    };
    fetchUserInventory();
  }, []);

  const filteredList = useMemo(() => {
    return userInventory.filter((element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, userInventory]);

  console.log(filteredList);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (filteredList.length === 0) return <div>Aucun élément</div>;

  return (
    <div>
      <h1>User Inventory</h1>
      {error && <div>Une erreur est survenue</div>}
      <div>
        <label>Recherche</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredList.map((element) => (
        <div key={element.itemId}>
          <p>{element.name}</p>
          <p>{element.quantity}</p>
        </div>
      ))}
    </div>
  );
};
