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
    <div>
      <input value={todoToAdd} onChange={(e) => setTodoToAdd(e.target.value)} />
      <button onClick={addTodo}>Ajouter todo</button>
    </div>
  );
});
