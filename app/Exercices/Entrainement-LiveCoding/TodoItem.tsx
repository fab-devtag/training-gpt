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
      <div>
        <span>{todo.title}</span>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={(e) => onCompleteTodo(e, todo.id)}
        />
        <button onClick={() => onDeleteTodo(todo.id)}>Supprimer</button>
      </div>
    );
  }
);
