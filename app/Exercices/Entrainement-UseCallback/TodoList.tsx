"use client";

import { useCallback, useState } from "react";
import { TodoItem } from "./TodoItem";

const TODOS: { id: number; text: string; completed: boolean }[] = [
  {
    id: 1,
    text: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    text: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    text: "Todo 3",
    completed: false,
  },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);
  const [count, setCount] = useState(0);

  const handleDelete = useCallback((todoId: number) => {
    console.log("delete", todoId);
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  }, []);

  const handleToggle = useCallback((todoId: number) => {
    console.log("toggle", todoId);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleAdd = useCallback(() => {
    console.log("add");
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: "Nouvelle Todo", completed: false },
    ]);
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={handleAdd}>Add Todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
