import { useState } from "react";
import { FilterType, OrderType } from "./types";

interface Props {
  filter: FilterType;
  updateFilter: (filter: "Tous" | "Terminés" | "A faire") => void;
  searchTitle: string;
  onSearch: (searchTitle: string) => void;
  sortDateOrder: OrderType;
  onSortDate: (sortDateOrder: OrderType) => void;
}
const FilterBar = ({
  filter,
  updateFilter,
  searchTitle,
  onSearch,
  sortDateOrder,
  onSortDate,
}: Props) => {
  return (
    <div className="space-x-4">
      <button
        onClick={() => updateFilter("Tous")}
        className={`bg-green-500 text-green-950 p-2 ${
          filter === "Tous" ? "scale-105" : ""
        }`}
      >
        Tous
      </button>
      <button
        onClick={() => updateFilter("Terminés")}
        className={`bg-pink-500 text-pink-950 p-2  ${
          filter === "Terminés" ? "scale-105" : ""
        }`}
      >
        Terminés
      </button>
      <button
        onClick={() => updateFilter("A faire")}
        className={`bg-cyan-500 text-cyan-950 p-2  ${
          filter === "A faire" ? "scale-105" : ""
        }`}
      >
        A faire
      </button>
      <input
        type="text"
        value={searchTitle}
        className="bg-white text-black"
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchTitle && (
        <button
          onClick={() => onSearch("")}
          className="bg-purple-500 text-purple-950 p-1"
        >
          Effacer la recherche
        </button>
      )}
      <button
        onClick={() => onSortDate(sortDateOrder === "asc" ? "desc" : "asc")}
      >
        {sortDateOrder === "asc" ? "Croissant" : "Décroissant"}
      </button>
    </div>
  );
};

export default FilterBar;
