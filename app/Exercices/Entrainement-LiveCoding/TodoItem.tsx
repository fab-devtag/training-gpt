import { ChangeEvent, memo } from "react";
import { Todo } from "./TodoList";

interface TodoItemProps {
  todo: Todo;
  onCompleteTodo: (e: ChangeEvent<HTMLInputElement>, todoId: number) => void;
  onDeleteTodo: (todoId: number) => void;
}
export const TodoItem = memo(
  ({ todo, onCompleteTodo, onDeleteTodo }: TodoItemProps) => {
    return (
      <div className="flex justify-between uppercase items-center">
        <span className={`${todo.complete ? "line-through" : ""}`}>
          {todo.title}
        </span>
        <div className="space-x-4">
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={(e) => onCompleteTodo(e, todo.id)}
          />
          <button
            className="bg-red-500 text-red-950 px-2 py-1 rounded-lg font-bold cursor-pointer hover:bg-red-400"
            onClick={() => onDeleteTodo(todo.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    );
  }
);
