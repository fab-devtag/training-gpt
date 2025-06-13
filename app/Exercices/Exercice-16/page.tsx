"use client";

import { useEffect, useState } from "react";

export default function Home() {
  type Todo = { id: number; text: string };
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoToAdd, setTodoToAdd] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (savedTodos) {
      console.log(savedTodos);
      setTodos(savedTodos);
    }
  }, []);

  const addTodo = () => {
    const newTodos = [...todos, { id: Date.now(), text: todoToAdd }];
    console.log(newTodos);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodoToAdd("");
  };

  const removeTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div>
      <input
        type="text"
        value={todoToAdd}
        onChange={(e) => setTodoToAdd(e.target.value)}
      />
      <button
        className="bg-amber-500"
        disabled={todoToAdd === ""}
        onClick={addTodo}
      >
        Ajouter
      </button>
      <div>
        {todos.map((todo) => (
          <p key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </p>
        ))}
      </div>
    </div>
  );
}
