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
