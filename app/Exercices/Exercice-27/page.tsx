"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { FilterType, OrderType, Todo } from "./types";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";

export default function TodoApp() {
  const todosList: Todo[] = [
    {
      id: 1,
      title: "Acheter du pain",
      done: false,
      createdAt: "2024-01-01T00:00:00.000Z",
    },
    {
      id: 2,
      title: "Faire du sport",
      done: true,
      createdAt: "2024-01-01T00:00:00.000Z",
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(todosList);
  const [filter, setFilter] = useState<FilterType>("Tous");
  const [searchTitle, setSearchTitle] = useState("");
  const [sortDateOrder, setSortByDate] = useState<OrderType>("asc");

  useEffect(() => {
    try {
      const todos = localStorage.getItem("todos");
      const localSearchTitle = localStorage.getItem("searchTodo");
      if (todos) {
        const parsed = JSON.parse(todos);
        if (Array.isArray(parsed)) {
          setTodos(parsed);
          setSearchTitle(localSearchTitle || "");
        }
      }
    } catch (e) {
      console.warn("Erreur lors de la récupéaration des todos");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("searchTodo", searchTitle);
  }, [todos, searchTitle]);

  const addTask = (task: string) => {
    const id = Math.max(0, ...todos.map((t) => t.id)) + 1;
    const createdAt = new Date().toISOString();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: id, title: task, done: false, createdAt: createdAt },
    ]);
  };

  const toggleTask = (taskId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (taskId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(updatedTodos);
  };

  const editTask = (taskId: number, title: string) => {
    if (title) {
      const updatedTodos = todos.map((todo) =>
        todo.id === taskId ? { ...todo, title: title } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const emptyTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]);
    setFilter("Tous");
  };

  const filteredTodos = useMemo(() => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.createdAt < b.createdAt) return sortDateOrder === "asc" ? -1 : 1;
      if (b.createdAt < a.createdAt) return sortDateOrder === "desc" ? 1 : -1;
      return 0;
    });
    return sortedTodos
      .filter((todo) =>
        todo.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
      .filter((todo) => {
        if (filter === "Terminés") {
          return todo.done;
        }
        if (filter === "A faire") return !todo.done;
        return true;
      });
  }, [filter, searchTitle, todos, sortDateOrder]);

  return (
    <div>
      <h1>Challenge : Mini Todo-List</h1>
      <TodoForm onAddTask={addTask} />
      {todos.length === 0 && <p>Aucune tâche pour le moment</p>}
      <div className="space-y-3 mt-3">
        <FilterBar
          filter={filter}
          updateFilter={setFilter}
          searchTitle={searchTitle}
          onSearch={setSearchTitle}
          sortDateOrder={sortDateOrder}
          onSortDate={setSortByDate}
        />
        {filteredTodos.length === 0 && <p>Aucune tâche trouvée</p>}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
          />
        ))}
      </div>
      <div>{todos.filter((todo) => !todo.done).length} tâches restantes</div>
      <button className="bg-amber-500 text-amber-950 p-1" onClick={emptyTodos}>
        Vider la liste
      </button>
    </div>
  );
}
