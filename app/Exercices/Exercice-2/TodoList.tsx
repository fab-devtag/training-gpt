"use client";

import { useEffect, useState } from "react";

interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchTodos();
  }, []);

  const completeTask = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };
  return (
    <div>
      {error && <p>Erreur de chargement.</p>}
      {!loading ? (
        todos.map((todo: TodoProps) => (
          <p key={todo.id} onClick={() => completeTask(todo.id)}>
            {todo.completed ? "✅" : "❌"} {todo.title}
          </p>
        ))
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
};

export default TodoList;
