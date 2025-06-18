import { useState } from "react";
import { Post } from "./types";

interface Props {
  post: Post;
  onDeletePost: (postId: number) => void;
  onEditPost: (title: string, body: string, id: number) => void;
  deletingPostId: number | null;
  editingPostId: number | null;
  onLike: (postId: number) => void;
}

const PostItem = ({
  post,
  onDeletePost,
  onEditPost,
  deletingPostId,
  editingPostId,
  onLike,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(post.title);
  const [currentContent, setCurrentContent] = useState(post.body);

  const handleEdit = (title: string, body: string, id: number) => {
    onEditPost(title, body, id);
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="mb-4 flex items-center gap-2 w-1/2">
      <input
        type="text"
        className="bg-white text-black w-1/2"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
      />
      <textarea
        className="bg-white text-black w-1/2"
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}
      />
      <button
        onClick={() => setIsEditing(false)}
        className="bg-red-500 p-2 text-red-950"
      >
        Annuler
      </button>
      <button
        onClick={() => handleEdit(currentTitle, currentContent, post.id)}
        className="bg-green-400 p-2 text-green-950"
      >
        {editingPostId === post.id ? "Modification..." : "Valider"}
      </button>
    </div>
  ) : (
    <div className="mb-4 flex items-center gap-2 w-1/2">
      <h1 className="font-bold text-orange-400">{post.title}</h1>
      <h2 className="italic">{post.body}</h2>
      <button
        onClick={() => onDeletePost(post.id)}
        className="bg-red-400 p-2 text-red-950"
      >
        {deletingPostId === post.id ? "Suppression..." : "Supprimer"}
      </button>
      <button
        onClick={() => setIsEditing(true)}
        className="bg-green-400 p-2 text-green-950"
      >
        Modifier
      </button>
      <button
        onClick={() => onLike(post.id)}
        className="bg-blue-400 text-blue-950 p-2"
      >
        Like {post.like || 0}
      </button>
    </div>
  );
};

export default PostItem;
