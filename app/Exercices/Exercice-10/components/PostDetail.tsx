import { Post } from "../data/posts";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-400">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <h2 className="text-gray-700 leading-relaxed">{post.content}</h2>
    </div>
  );
};

export default PostDetail;
