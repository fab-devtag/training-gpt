type FilterType = "Tous" | "Terminés" | "A faire";

interface Props {
  filter: FilterType;
  updateFilter: (filter: "Tous" | "Terminés" | "A faire") => void;
}
const FilterBar = ({ filter, updateFilter }: Props) => {
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
    </div>
  );
};

export default FilterBar;
