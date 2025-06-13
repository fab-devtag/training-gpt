"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [toggleReset, setToggleReset] = useState(false);

  useEffect(() => {
    let idInterval = setInterval(() => {
      setToggleReset(false);
      setCount((prev) => {
        if (prev === 10) {
          clearInterval(idInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, [toggleReset]);

  const handleReset = () => {
    setToggleReset(true);
    setCount(0);
  };
  return (
    <div>
      {count}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
