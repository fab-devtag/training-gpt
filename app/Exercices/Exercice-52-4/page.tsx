"use client";

import { useState } from "react";

export default function AsyncCounterChallenge() {
  const [count, setCount] = useState(0);

  const handleIncrement = async () => {
    console.log("A: Début incrément");

    // 1️⃣ Micro-tâche promise
    await Promise.resolve().then(() => console.log("B: Promise interne"));

    // 2️⃣ Macro-tâche setTimeout
    setTimeout(() => console.log("C: setTimeout interne"), 0);

    console.log("D: Avant setCount");
    setCount((prev) => prev + 1);
    console.log("E: Après setCount");
  };

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={handleIncrement}>Incrémenter</button>
    </div>
  );
}
