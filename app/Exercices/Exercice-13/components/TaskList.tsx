import { Task } from "../task";

interface Props {
  tasks: Task[];
  handleTaskToggle: (taskId: number) => void;
}

const TaskList = ({ tasks, handleTaskToggle }: Props) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const priorityColor = (priority: string) => {
    if (priority === "low") return "text-purple-500";
    else if (priority === "medium") return "text-yellow-500";
    else return "text-red-500";
  };

  return (
    <div className="space-y-3">
      <div>
        <h1>Liste des tâches</h1>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex gap-2"
            onClick={() => handleTaskToggle(task.id)}
          >
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p className={priorityColor(task.priority)}>{task.priority}</p>
            <p>{task.done ? "✅" : "❌"}</p>
            <p>{task.dueDate}</p>
            <i>{task.dueDate < currentDate && !task.done ? "Retard" : ""}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
