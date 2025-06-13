"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [toggledButton, setToggledButton] = useState<
    "start" | "pause" | "reset"
  >("reset");

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current) return;
    console.log("start");
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setToggledButton("start");
  };

  const pauseTimer = () => {
    console.log("pause");
    if (intervalRef.current) clearInterval(intervalRef.current);
    setToggledButton("pause");
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer(0);
    setToggledButton("reset");
  };
  return (
    <div className="flex gap-5">
      <p>{timer}</p>
      <button disabled={toggledButton === "start"} onClick={startTimer}>
        Démarrer
      </button>
      <button disabled={toggledButton === "pause"} onClick={pauseTimer}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
