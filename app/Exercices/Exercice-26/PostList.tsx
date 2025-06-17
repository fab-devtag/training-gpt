import { Post } from "./types";

interface Props {
  posts: Post[];
  onDeletePost: (postId: number) => void;
}

const PostList = ({ posts, onDeletePost }: Props) => {
  return (
    <div className="mt-5">
      {posts.map((post) => (
        <div key={post.id} className="mb-4 flex items-center gap-2">
          <h1 className="font-bold text-orange-400">{post.title}</h1>
          <h2 className="italic">{post.body}</h2>
          <button
            onClick={() => onDeletePost(post.id)}
            className="bg-red-500 p-2"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
