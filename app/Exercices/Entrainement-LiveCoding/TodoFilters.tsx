import { Filters } from "./TodoList";

interface TodoFiltersProps {
  currentFilter: Filters;
  onChangeFilter: (filter: Filters) => void;
}

export const TodoFilters = ({
  currentFilter,
  onChangeFilter,
}: TodoFiltersProps) => {
  const filters: { id: number; name: Filters; value: string }[] = [
    {
      id: 1,
      name: "all",
      value: "Tous",
    },
    { id: 2, name: "active", value: "Actifs" },
    { id: 3, name: "completed", value: "Terminées" },
  ];

  return (
    <div className="space-x-3">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChangeFilter(filter.name)}
          className={`${currentFilter === filter.name ? "font-bold" : ""}`}
        >
          {filter.value}
        </button>
      ))}
    </div>
  );
};
