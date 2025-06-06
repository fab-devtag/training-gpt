import Link from "next/link";
import { Post } from "../data/posts";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <div>
      <div>
        <h1>
          <Link href={`/Exercices/Exercice-10/posts/${post.id}`}>
            {post.title}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PostItem;
