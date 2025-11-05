import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } } // ✅ Récupère l'id
) => {
  const { id } = params;
  fetch("https://dummyjson.com/todos/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: false,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
  revalidateTag(`todo-${id}`);
  revalidateTag("todos");

  return Response.json({ success: true });
};
