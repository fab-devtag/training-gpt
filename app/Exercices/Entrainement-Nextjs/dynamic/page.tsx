export default async function DynamicPage() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((r) => r.json());

  const tenPosts = [...posts].slice(0, 10);

  return (
    <div className="flex flex-col">
      {tenPosts.map((post) => (
        <span key={post.id}>
          #{post.id} {post.title} - {Date.now()}
        </span>
      ))}
    </div>
  );
}
