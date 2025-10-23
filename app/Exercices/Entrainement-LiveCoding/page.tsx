import { TodoList } from "./TodoList";

export default function Main() {
  return (
    <div>
      <h1 className="font-bold uppercase border px-6 py-4 w-fit rounded-lg mx-auto my-4">
        Entrainement - Live coding
      </h1>
      <TodoList />
    </div>
  );
}
