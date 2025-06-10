interface Props {
  sortOrder: "asc" | "desc";
  selectedType: string;
  filterByType: (selectedType: string) => void;
  orderBy: (sortOrder: "asc" | "desc") => void;
}

const FilterBar = ({
  sortOrder,
  selectedType,
  filterByType,
  orderBy,
}: Props) => {
  const types = ["Eau", "Feu", "Électrik", "Plante", "Vol"];
  return (
    <div>
      <div>
        <select
          name="types"
          id="types"
          value={selectedType}
          onChange={(e) => filterByType(e.currentTarget.value)}
        >
          <option value="">Choisissez un type</option>
          {types.map((type) => (
            <option
              className="text-black"
              key={type}
              value={type.toLocaleLowerCase()}
            >
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        Trier par nom{" "}
        <button onClick={() => orderBy(sortOrder === "desc" ? "asc" : "desc")}>
          {sortOrder === "desc" ? "croissant" : "décroissant"}{" "}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
