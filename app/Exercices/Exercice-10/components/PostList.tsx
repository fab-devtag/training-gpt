import { Post } from "../data/posts";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
