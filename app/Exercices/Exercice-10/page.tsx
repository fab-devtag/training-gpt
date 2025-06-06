import PostList from "./components/PostList";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-400">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Mini Projet : Blog simplifié
      </h1>
      <PostList posts={posts} />
    </div>
  );
}
