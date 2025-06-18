import { useRef, useState } from "react";
import { Todo } from "./types";

interface Props {
  onAddTask: (task: string) => void;
}

const TodoForm = ({ onAddTask }: Props) => {
  const [task, setTask] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    onAddTask(task);
    setTask("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex">
      <input
        ref={inputRef}
        className="bg-white text-black"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        disabled={!task}
        className="bg-green-500 text-green-950 p-2 disabled:bg-gray-500"
        onClick={handleAddTask}
      >
        Ajouter
      </button>
    </div>
  );
};

export default TodoForm;
