export default async function StaticPage() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  }).then((r) => r.json());

  const tenPosts = posts.slice(0, 10);

  return (
    <div className="flex flex-col">
      {tenPosts.map((post: any) => (
        <span key={post.id}>
          #{post.id} {post.title} - {Date.now()}
        </span>
      ))}
    </div>
  );
}
