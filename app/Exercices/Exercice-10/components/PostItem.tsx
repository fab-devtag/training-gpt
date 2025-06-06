import Link from "next/link";
import { Post } from "../data/posts";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow hover:shadow-md transition-all">
      <h2 className="text-xl font-semibold text-blue-600 hover:underline">
        <Link href={`/Exercices/Exercice-10/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
    </div>
  );
};

export default PostItem;
