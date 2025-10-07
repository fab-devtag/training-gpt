import { useState, useEffect } from "react";

// Problème 3
export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, []); // Quels sont les problèmes (il y en a 2 !) ?

  return <div>{seconds}s</div>;
}
