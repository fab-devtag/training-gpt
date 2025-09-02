"use client";
import { useMemo, useState } from "react";

export default function Home() {
  const todos = [
    {
      id: 1,
      name: "Vider la cave",
    },
    {
      id: 2,
      name: "Monter le bureau",
    },
    {
      id: 3,
      name: "Chercher le colis",
    },
  ];

  const [todosList, setTodosList] = useState(todos);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addNewTodo = (newTodo: { id: number; name: string }) => {
    setTodosList((prev) => [...prev, newTodo]);
    setNewTodo("");
  };

  const filteredTodos = useMemo(() => {
    return todosList.filter((todo) =>
      todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, todosList]);

  return (
    <div>
      <h1>
        47-4 - Mini Live Coding : TodoList avec filtrage et ajout dynamique
      </h1>
      <div className="space-x-2">
        <span>Ajouter une tâche</span>
        <input
          className="bg-white text-black"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={() =>
            addNewTodo({ id: todosList.length + 1, name: newTodo })
          }
          disabled={!newTodo}
        >
          Ajouter
        </button>
      </div>
      <div className="space-x-2">
        <span>Filtrer par nom</span>
        <input
          className="bg-white text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <p key={todo.id}>{todo.name}</p>)
        ) : (
          <p>Aucune tâche correspondant à ce filtre</p>
        )}
      </div>
    </div>
  );
}
