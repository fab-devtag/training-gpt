import { Todo } from "./types";

interface Props {
  todo: Todo;
  onToggleTask: (todoId: number) => void;
  onDeleteTask: (todoId: number) => void;
}

const TodoItem = ({ todo, onToggleTask, onDeleteTask }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <h1>{todo.title}</h1>
      <button onClick={() => onToggleTask(todo.id)}>
        {todo.done ? "✅" : "❌"}
      </button>
      <button
        className="bg-red-500 text-red-950 p-1"
        onClick={() => onDeleteTask(todo.id)}
      >
        Supprimer
      </button>
    </div>
  );
};

export default TodoItem;
