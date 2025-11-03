"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for: ", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
