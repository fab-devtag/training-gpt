"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [stopHourCount, setStopHoutCount] = useState(false);
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (stopHourCount) {
        clearInterval(intervalId);
        return;
      }
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [stopHourCount]);

  const messageToShow = () => {
    if (time.getHours() < 11) {
      return "Bonjour";
    } else if (time.getHours() >= 11 && time.getHours() < 18) {
      return "Bon après-midi";
    }
    return "Bonsoir";
  };

  return (
    <div>
      <h1>{messageToShow()}</h1>
      <h2>
        {time.getHours()}:{String(time.getMinutes()).padStart(2, "0")}:
        {String(time.getSeconds()).padStart(2, "0")}
      </h2>
      <button
        className="bg-amber-400 p-2 text-black"
        onClick={() => setStopHoutCount((prevState) => !prevState)}
      >
        {stopHourCount ? "Reprendre" : "Arrêter"}
      </button>
    </div>
  );
};

export default Clock;
