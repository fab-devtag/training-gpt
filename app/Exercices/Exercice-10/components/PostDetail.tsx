import { Post } from "../data/posts";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
    </div>
  );
};

export default PostDetail;
