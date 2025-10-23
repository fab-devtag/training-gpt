import { memo, useState } from "react";
import { Todo } from "./TodoList";

interface TodoInputProps {
  onAddTodo: (todoToAdd: Todo) => void;
}
export const TodoInput = memo(({ onAddTodo }: TodoInputProps) => {
  const [todoToAdd, setTodoToAdd] = useState("");

  const addTodo = () => {
    if (!todoToAdd.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: todoToAdd,
      complete: false,
    };
    onAddTodo(newTodo);
    setTodoToAdd("");
  };

  return (
    <div className="space-x-2 mt-16">
      <input
        className="bg-white text-black rounded-lg placeholder:text-gray-300 italic px-2 py-1"
        value={todoToAdd}
        placeholder="Nom de la tâche"
        onChange={(e) => setTodoToAdd(e.target.value)}
      />
      <button
        className="bg-orange-500 px-2 py-1 rounded-lg text-orange-900 font-bold cursor-pointer hover:bg-orange-400"
        onClick={addTodo}
      >
        Ajouter
      </button>
    </div>
  );
});
