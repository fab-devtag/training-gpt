import PostList from "./components/PostList";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div>
      <h1>Mini Projet : Blog simplifié</h1>
      <PostList posts={posts} />
    </div>
  );
}
