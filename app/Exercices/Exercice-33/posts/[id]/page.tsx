import { Post } from "../../types";

export default async function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await response.json();
  return (
    <div>
      <h1>La post sur : {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
