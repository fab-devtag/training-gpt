import { Metadata } from "next";

export default async function TodoDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;

  const todo = await fetch(`https://dummyjson.com/todos/${id}`, {
    next: { revalidate: 120, tags: [`todo-${id}`] },
  }).then((res) => res.json());

  return <div>{todo.todo}</div>;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const todo = await fetch(`https://dummyjson.com/todos/${params.id}`).then(
    (res) => res.json()
  );

  return {
    title: todo.todo,
    description: todo.completed ? "✅ Completed" : "⏳ Not completed",
    openGraph: {
      title: todo.todo,
      description: `Todo #${params.id}`,
      images: ["/og-default.jpg"], // ✅ Image par défaut
    },
  };
}
