"use client";
import { useRef, useState } from "react";

export default function Home() {
  const [compteur, setCompteur] = useState(0);
  const [delay, setDelay] = useState("");
  const [limit, setLimit] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [compteurState, setCompteurState] = useState<
    "En cours" | "En pause" | "Terminé"
  >("Terminé");

  const startTime = () => {
    const delayMs = Number(delay) * 1000;
    const limitNumber = Number(limit);

    if (!delayMs || !limitNumber) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCompteur((prev) => {
        if (prev >= limitNumber) {
          setCompteurState("Terminé");
          if (intervalRef.current) clearInterval(intervalRef.current);

          return prev;
        }
        return prev + 1;
      });
    }, delayMs);
    setCompteurState("En cours");
  };

  const pauseTime = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCompteurState("En pause");
  };

  const resetTime = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCompteur(0);
    setDelay("");
    setLimit("");
    setCompteurState("Terminé");
  };

  return (
    <div>
      Compteur Configurable
      <div>
        <p>{compteur}</p>
        <p>{compteurState}</p>
        <div className="flex gap-2">
          <input
            type="number"
            className="bg-white text-black"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          />
          <input
            type="number"
            className="bg-white text-black"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
          <button
            className="disabled:bg-amber-300"
            disabled={compteurState === "En cours" || !delay || !limit}
            onClick={startTime}
          >
            Démarrer
          </button>
          <button
            className="disabled:bg-amber-300"
            disabled={
              compteurState === "En pause" || compteurState === "Terminé"
            }
            onClick={pauseTime}
          >
            Pause
          </button>
          <button
            className="disabled:bg-amber-300"
            disabled={compteur === 0}
            onClick={resetTime}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
