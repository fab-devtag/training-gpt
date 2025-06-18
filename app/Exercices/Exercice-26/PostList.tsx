import { useState } from "react";
import { Post } from "./types";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
  onDeletePost: (postId: number) => void;
  onEditPost: (title: string, body: string, id: number) => void;
  deletingPostId: number | null;
  editingPostId: number | null;
  onLike: (postId: number) => void;
}

const PostList = ({
  posts,
  onDeletePost,
  onEditPost,
  deletingPostId,
  editingPostId,
  onLike,
}: Props) => {
  return (
    <div className="mt-5">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeletePost={onDeletePost}
          onEditPost={onEditPost}
          deletingPostId={deletingPostId}
          editingPostId={editingPostId}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default PostList;
