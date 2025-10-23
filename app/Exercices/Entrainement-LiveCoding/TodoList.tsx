"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoFilters } from "./TodoFilters";

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export type Filters = "all" | "active" | "completed";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>("all");

  const handleAddTodo = useCallback(
    (todoToAdd: Todo) => {
      const newTodos = [...todos, todoToAdd];
      setTodos(newTodos);
    },
    [todos]
  );

  const handleCompleteTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>, todoId: number) => {
      const newTodos = todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, complete: !todo.complete }
          : todo;
      });

      setTodos(newTodos);
    },
    [todos]
  );

  const handleDeleteTodo = useCallback(
    (todoId: number) => {
      const newTodos = todos.filter((todo) => todoId !== todo.id);
      setTodos(newTodos);
    },
    [todos]
  );

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
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={handleCompleteTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <p>Aucun élément dans la liste</p>
        )}
      </div>
    </div>
  );
};
