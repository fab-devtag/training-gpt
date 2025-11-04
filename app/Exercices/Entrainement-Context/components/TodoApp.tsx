"use client";
import { FormEvent, useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoApp = () => {
  const {
    stats,
    setFilter,
    state,
    filteredTodos,
    removeTodo,
    clearCompleted,
    toggleTodo,
    addTodo,
  } = useTodoContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(input);
  };
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todos</h1>

      {/* Stats */}
      <div className="mb-4 flex gap-4 text-sm">
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>Completed: {stats.completed}</span>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="mt-4 text-sm text-green-500" type="submit">
          Ajouter
        </button>
      </form>

      {/* Filters */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={state.filter === "all" ? "font-bold" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={state.filter === "active" ? "font-bold" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={state.filter === "completed" ? "font-bold" : ""}
        >
          Completed
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 border p-2 rounded"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="ml-auto text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Clear completed */}
      {stats.completed > 0 && (
        <button onClick={clearCompleted} className="mt-4 text-sm text-gray-500">
          Clear completed ({stats.completed})
        </button>
      )}
    </div>
  );
};
