import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  revalidateTag("todos");

  return Response.json({ success: true });
};
