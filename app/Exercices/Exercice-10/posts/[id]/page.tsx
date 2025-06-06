import PostDetail from "../../components/PostDetail";
import { posts } from "../../data/posts";

interface Props {
  params: { id: string };
}
export default function ArticleDetailsPage({ params }: Props) {
  const id = parseInt(params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return <h1>Article introuvable</h1>;
  }
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}
