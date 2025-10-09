"use client";
import { useEffect, useState } from "react";

export function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // Affichera toujours 0 !
      setCount((prev) => prev + 1); // Ne marchera pas comme prévu
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}
