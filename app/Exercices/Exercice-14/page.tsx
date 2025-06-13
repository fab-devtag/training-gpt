"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(idInterval);
          return prev;
        }
        let value = prev + Math.floor(Math.random() * 10);
        return value > 100 ? 100 : value;
      });
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar value={progressValue} />
    </div>
  );
}

export const ProgressBar = ({ value }: { value: number }) => {
  const getBgColor = (progressValue: number) => {
    if (progressValue > 70) return "bg-green-500";
    else if (progressValue > 30 && progressValue <= 70) return "bg-orange-500";
    return "bg-red-500";
  };

  const bgColor = getBgColor(value);

  return (
    <div className="bg-gray-500 w-[400px]">
      <div
        className={`${bgColor} transition-all`}
        style={{ width: value + "%" }}
      >
        100%
      </div>
    </div>
  );
};
