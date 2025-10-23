"use client";

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoFilters } from "./TodoFilters";

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
  createdAt: Date;
}

export type Filters = "all" | "active" | "completed";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>("all");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = useCallback(
    (todoToAdd: Todo) => {
      setTodos((prev) => [...prev, todoToAdd]);
    },
    [todos]
  );

  const handleCompleteTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>, todoId: number) => {
      setTodos((prev) =>
        prev.map((todo) => {
          return todo.id === todoId
            ? { ...todo, complete: !todo.complete }
            : todo;
        })
      );
    },
    []
  );

  const handleDeleteTodo = useCallback((todoId: number) => {
    setTodos((prev) => prev.filter((todo) => todoId !== todo.id));
  }, []);

  const handleCleanCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.complete));
  }, []);

  const countTodos = useMemo(() => {
    return todos.filter((todo) => !todo.complete).length;
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "completed") return todo.complete;
      else if (filter === "active") return !todo.complete;
      return todo;
    });
  }, [filter, todos]);

  return (
    <div className="border w-fit px-6 py-4 rounded-lg space-y-4 relative">
      <div className="bg-amber-950 p-4 rounded-lg absolute w-full inset-x-0 top-0 border-b">
        <h1 className="font-bold uppercase text-center">Todo List</h1>
      </div>
      <TodoInput onAddTodo={handleAddTodo} />
      <h2>
        Liste des todos :
        <strong className="text-yellow-500"> {countTodos}</strong> restant
        {filteredTodos.length > 1 ? "s" : ""}
      </h2>
      <TodoFilters
        onChangeFilter={(filter) => setFilter(filter)}
        currentFilter={filter}
      />
      <div className="space-y-2">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <TodoItem
                todo={todo}
                onCompleteTodo={handleCompleteTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            </motion.div>
          ))
        ) : (
          <p>Aucun élément dans la liste</p>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={handleCleanCompleted}
          className=" bg-violet-500 text-violet-950 px-2 py-1 rounded-lg font-bold cursor-pointer hover:bg-violet-300"
        >
          Vider les complètes
        </button>
      </div>
    </div>
  );
};
