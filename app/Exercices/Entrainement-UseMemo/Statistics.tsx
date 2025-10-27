"use client";
import { useMemo, useState } from "react";

export const Statistics = ({ numbers }: { numbers: number[] }) => {
  const [color, setColor] = useState("blue");

  const statistics = useMemo(() => {
    const mean =
      numbers.reduce((total, accumulator) => total + accumulator, 0) /
      numbers.length;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    let median;
    if (sorted.length % 2 !== 0) {
      median = sorted[mid];
    } else {
      median = (sorted[mid - 1] + sorted[mid]) / 2;
    }

    const stdDev = Math.sqrt(
      numbers.reduce((sum, val) => sum + (val - mean) ** 2, 0) / numbers.length
    );
    return { mean, median, stdDev };
  }, [numbers]);

  return (
    <div>
      <p>Moyenne : {statistics.mean}</p>
      <p>Médiane : {statistics.median}</p>
      <p>Ecart-Type : {statistics.stdDev}</p>
      <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>
        Change color
      </button>
    </div>
  );
};
