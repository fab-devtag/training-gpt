import { Metadata } from "next";

export default async function Main() {
  const { todos } = await fetch("https://dummyjson.com/todos", {
    next: { revalidate: 60, tags: ["todos"] },
  }).then((res) => res.json());

  return (
    <div className="flex flex-col">
      {todos.map((todo: any) => (
        <span key={todo.id}>{todo.todo}</span>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "TodoList",
  description: "Liste des todos",
  openGraph: {
    title: "Todos",
    description: "Liste des todos",
    images: ["/og-image.jpg"],
  },
};
