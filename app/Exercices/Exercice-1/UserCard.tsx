"use client";

import { useState } from "react";

interface Props {
  name: string;
  email: string;
  isOnline: boolean;
}

const UserCard = ({ name, email, isOnline }: Props) => {
  const [showEmail, setShowEmail] = useState(true);
  return (
    <div className="bg-amber-900 w-fit p-5 border-amber-600 border-2">
      <h1>Nom : {name}</h1>
      <h2>{showEmail ? `Email : ${email}` : "Email masqué"}</h2>
      {isOnline ? <p>En ligne :✅ </p> : <p>❌ Hors ligne</p>}
      <button onClick={() => setShowEmail((prev) => !prev)}>
        {showEmail ? "Masquer l'email" : "Afficher l'email"}
      </button>
    </div>
  );
};

export default UserCard;
