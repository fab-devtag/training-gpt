"use client";
import { useState, useEffect } from "react";

// Exercice 3.2
export function Message({ userId }: { userId: number }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    setTimeout(() => {
      if (!ignore) {
        alert(`Message pour user ${userId}: ${message}`);
      }
    }, 3000);

    return () => {
      ignore = true;
    };
  }, [message, userId]); // Changez userId et message rapidement, que se passe-t-il ?

  return <input value={message} onChange={(e) => setMessage(e.target.value)} />;
}
// TODO: Corrigez pour que le bon userId et message soient affichés
