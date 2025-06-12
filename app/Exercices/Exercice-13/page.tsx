"use client";

import { useState } from "react";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";
import { Task, tasks } from "./task";

export default function Home() {
  const filterButtons = ["Toutes", "Terminées", "En cours"];

  const [allTasks, setTasks] = useState<Task[]>(tasks);
  const [filter, setFilter] = useState("Toutes");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortOrder = () => {
    const orderBy = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(orderBy);
  };

  const handleTaskToggle = (taskId: number) => {
    const newTasks = allTasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : { ...task }
    );

    setTasks(newTasks);
  };

  const filteredTasks = allTasks.filter((task) => {
    if (filter === "Toutes") return true;
    if (filter === "Terminées") return task.done;
    return !task.done;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.dueDate < b.dueDate) return sortOrder === "asc" ? -1 : 1;
    if (a.dueDate > b.dueDate) return sortOrder === "desc" ? 1 : -1;
    return 0;
  });

  const finalTasks = sortedTasks.filter(
    (task) =>
      task.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="mt-4">
        <h1>Projet Challenge | Gestionnaire de tâches</h1>
      </div>
      <div className="space-y-3 mt-8 w-2/3 flex flex-col">
        <div className="space-x-2">
          {filterButtons.map((filterButton) => (
            <FilterButton
              key={filterButton}
              title={filterButton}
              handleFilter={setFilter}
            />
          ))}
        </div>
        <div>
          <span>
            Trier par date{" "}
            <button onClick={handleSortOrder} className="font-bold">
              {sortOrder === "asc" ? "croissante" : "décroissante"}
            </button>
          </span>
        </div>
        <div>
          <input
            className="bg-white placeholder:text-gray-600 w-1/4 text-black"
            placeholder="Saisissez le nom de la tâche..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <TaskList tasks={finalTasks} handleTaskToggle={handleTaskToggle} />
      </div>
    </div>
  );
}
