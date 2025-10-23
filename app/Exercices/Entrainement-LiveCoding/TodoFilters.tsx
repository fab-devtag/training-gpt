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
    <div className="space-x-3 w-full flex justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChangeFilter(filter.name)}
          className={`font-bold min-w-[112px] cursor-pointer uppercase border px-2 py-1 rounded-lg hover:bg-green-500 text-black ${
            currentFilter === filter.name ? "bg-green-500" : "bg-white"
          }`}
        >
          {filter.value}
        </button>
      ))}
    </div>
  );
};
