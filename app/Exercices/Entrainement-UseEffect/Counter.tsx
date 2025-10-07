"use client";
import { useEffect, useState } from "react";

// Problème 1
export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count actuel: ${count}`);
  }); // Quel est le problème ?

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

//Le problème ici c'est qu'à chaque render, useEffect va se lancer, y compris même si on incrémente pas le counter
