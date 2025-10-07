"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./src/components/Button";
import { Input } from "./src/components/Input";
import { Card } from "./src/components/Card";
import { useToggle } from "./src/components/hooks/useToggle";
import { useLocalStorage } from "./src/components/hooks/useLocalStorage";
import { List } from "./src/components/List";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [toggled, toggle] = useToggle(false);
  const [data, saveData] = useLocalStorage("donnees", [1, 2, 3, 4, 5]);

  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  const handleClick = () => {
    alert("Clique !");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) setError("Email invalide");
    else setError("");
  };

  return (
    <div className="p-8 sapce-y-4">
      <Button onClick={handleClick}>Cliquez moi</Button>
      <Button variant="danger" disabled onClick={handleClick}>
        Désactivé
      </Button>
      <Button variant="secondary">Secondaire</Button>
      <Input
        label="Email"
        value={email}
        onChange={handleChange}
        error={error}
        placeholder="Saisissez votre email"
        required
        type="email"
      />
      <Card
        title="React Typage"
        onHeaderClick={() => alert("Je clique sur le header")}
      >
        <p>Bonjour</p>
      </Card>
      <div onClick={toggle}>
        Test du toggle {toggled ? "activé" : "désactivé"}
      </div>
      <div onClick={() => saveData([1])}>Test de localStorage</div>
      <List
        items={users}
        keyExtractor={(user) => user.id}
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong> - {user.email}
          </div>
        )}
        emptyMessage="Aucun utilisateur"
      />
    </div>
  );
}
