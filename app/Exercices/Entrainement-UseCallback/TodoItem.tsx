import { memo } from "react";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  onDelete: (todoId: number) => void;
  onToggle: (todoId: number) => void;
}

export const TodoItem = memo(({ todo, onDelete, onToggle }: TodoItemProps) => {
  console.log("render todo Item", todo.id);
  return (
    <div>
      <input
        type="checkbox"
        className="bg-white text-black"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});
