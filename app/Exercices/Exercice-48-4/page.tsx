"use client";

import { useState } from "react";

export default function Home() {
  interface Task {
    id: number;
    name: string;
  }

  const [tasks, setTasks] = useState<Task[]>([
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
  ]);
  const [newTaskName, setNewTaskName] = useState("");

  const addTask = (taskName: string) => {
    if (!taskName.trim()) return;

    const taskToAdd = { id: Date.now(), name: taskName };
    setTasks((prev) => [...prev, taskToAdd]);
    setNewTaskName("");
  };

  const deleteTask = (id: number) => {
    const filteredTaks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTaks);
  };

  return (
    <div>
      <h1>Evaluation - TodoList</h1>
      <div className="space-x-2">
        <label>Ajouter une tâche</label>
        <input
          className="bg-white text-black"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button disabled={!newTaskName} onClick={() => addTask(newTaskName)}>
          Ajouter
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex space-x-2">
            <p>{task.name}</p>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}
