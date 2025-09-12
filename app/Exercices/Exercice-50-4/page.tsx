"use client";

import { memo, useCallback, useState } from "react";

type Task = {
  id: number;
  name: string;
};

export default function Home() {
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
  const [newTask, setNewTask] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  const addNewTask = (taskName: string) => {
    if (!taskName.trim()) return;
    const taskToAdd = { id: Date.now(), name: taskName };
    setTasks((prev) => [...prev, taskToAdd]);
    setNewTask("");
  };

  const deleteTask = useCallback((taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  return (
    <div>
      <h1>Evaluation - Optimisation d’une TodoList</h1>
      <div className="flex space-x-2">
        <p>Compteur pour voir les render {counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Incrementer
        </button>
      </div>
      <div className="space-x-2">
        <label>Ajouter une tâche</label>
        <input
          className="bg-white text-black"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addNewTask(newTask)}>Ajouter</button>
      </div>
      <div>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}
interface TodoItemProps {
  task: Task;
  deleteTask: (taskId: number) => void;
}

const TodoItem = memo(({ task, deleteTask }: TodoItemProps) => {
  console.log("Je re render");
  return (
    <div className="flex space-x-2">
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
});

/* 1️⃣ Version non optimisée (sans memo / useCallback)
const TodoItem = ({ task, deleteTask }) => {
  console.log("Je re render", task.name);
  return (
    <div>
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

Observations :

Tu as un compteur counter dans le parent.

À chaque clic sur Incrementer :

Parent rerender → toutes les fonctions et JSX sont recréés.

Chaque enfant TodoItem rerender, même si sa task n’a pas changé.

Console.log montre :

Je re render Vider la cave
Je re render Monter le bureau
Je re render Chercher le colis


→ Tous les enfants rerender à chaque clic, inutilement.

2️⃣ Version optimisée avec memo mais sans useCallback correct
const TodoItem = memo(({ task, deleteTask }) => {
  console.log("Je re render", task.name);
  return <p>{task.name}</p>;
});

const deleteTask = useCallback(
  (taskId) => setTasks(tasks.filter(t => t.id !== taskId)),
  [tasks]
);

Observations :

TodoItem est memoisé → devrait bloquer les rerenders.

Mais deleteTask change à chaque modification de tasks (dépendance [tasks]) → memo voit que la prop deleteTask a changé → rerender.

Console.log après incrementer :

Je re render Vider la cave
Je re render Monter le bureau
Je re render Chercher le colis


→ Les enfants rerender encore, même si leurs task n’ont pas changé.

3️⃣ Version optimisée avec memo + useCallback correct
const deleteTask = useCallback((taskId) => {
  setTasks(prev => prev.filter(t => t.id !== taskId));
}, []);

Observations :

deleteTask garde la même référence, grâce au setter fonctionnel et tableau de dépendance vide.

TodoItem memoisé → props stables (task + deleteTask) → pas de rerender inutile.

Console.log après incrementer :

(nothing)


→ Aucun enfant ne rerender, seul le parent rerender pour mettre à jour le compteur.

💡 Visualisation simplifiée :
Action	Parent rerender ?	deleteTask change ?	task change ?	TodoItem rerender ?
Incrementer compteur	✅	❌	❌	❌
Ajouter tâche	✅	❌	✅ (nouvelle tâche ajoutée)	✅ (nouvelle tâche), les autres ❌
Supprimer tâche	✅	❌	✅ (tâche supprimée)	✅ (celle supprimée), les autres ❌

memo regarde seulement les props → si elles sont stables → pas de rerender.

useCallback rend la fonction deleteTask stable → memo peut fonctionner. */
