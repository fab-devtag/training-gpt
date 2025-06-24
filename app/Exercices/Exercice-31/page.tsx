"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  return (
    <div>
      <h1>Custom Hook - useDebounce</h1>
      <p>Search term : {debouncedSearchTerm}</p>
      <input
        type="text"
        className="bg-white text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};
