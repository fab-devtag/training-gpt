"use client";
import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
  ]);
  const [taskToAdd, setTaskToAdd] = useState("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const index = tasks[tasks.length - 1].id + 1;
    //Dans le cas ou je faisais l'id avec la date j'aurais fais simplement index = Date.now();
    setTasks([...tasks, { id: index, title: taskToAdd }]);
    setTaskToAdd("");
  };
  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <li
          className="transition-all duration-300 hover:translate-x-1"
          key={task.id}
        >
          {task.title}
        </li>
      ))}
      <div>
        <form onSubmit={addTask}>
          <input
            type="text"
            className="bg-white text-black"
            value={taskToAdd}
            onChange={(e) => setTaskToAdd(e.target.value)}
          />
          <input
            type="submit"
            className="bg-blue-500 disabled:bg-gray-500"
            title="Ajouter une tâche"
            disabled={!taskToAdd}
          />
        </form>
      </div>
    </div>
  );
};

export default TaskManager;
