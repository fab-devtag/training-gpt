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

const TODOS: Todo[] = [
  {
    id: 1,
    title: "Acheter du pain",
    complete: false,
  },
  {
    id: 2,
    title: "Faire la vaisselle",
    complete: false,
  },
  {
    id: 3,
    title: "Réparer porte",
    complete: false,
  },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);
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
    <div>
      <TodoInput onAddTodo={handleAddTodo} />
      <h2>Liste des todos : {countTodos} restants</h2>
      <TodoFilters
        onChangeFilter={(filter) => setFilter(filter)}
        currentFilter={filter}
      />
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={handleCompleteTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

/* 

**Fonctionnalités obligatoires :**
- ✅ Styles Tailwind //Done
- ✅ Tests unitaires (bonus)
  */
