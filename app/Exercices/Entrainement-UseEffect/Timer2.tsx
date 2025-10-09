import { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // TODO: Ajoutez la cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{seconds}s</div>;
}
