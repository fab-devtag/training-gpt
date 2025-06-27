import Link from "next/link";
import { Post } from "./types";
import { useState } from "react";

interface Props {
  post: Post;
  onDeletePost: (id: number) => void;
  onEditPost: (id: number, title: string, body: string) => void;
}
const PostItem = ({ post, onDeletePost, onEditPost }: Props) => {
  const [editing, setEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(post.title);
  const [currentBody, setCurrentBody] = useState(post.body);

  const handleEdit = () => {
    onEditPost(post.id, currentTitle, currentBody);
    setEditing(false);
  };

  return editing ? (
    <div className="mt-4">
      <div className="flex flex-col gap-2">
        <input
          className="bg-white text-black"
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <input
          className="bg-white text-black"
          type="text"
          value={currentBody}
          onChange={(e) => setCurrentBody(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button onClick={() => setEditing(false)} className="bg-red-500">
          Annuler
        </button>
        <button onClick={handleEdit} className="bg-green-500">
          Valider
        </button>
      </div>
    </div>
  ) : (
    <div className="mt-4">
      <Link href={`/Exercices/Exercice-37/posts/${post.id}`}>
        <p>Titre: {post.title}</p>
        <p>Contenu: {post.body.slice(0, 50)}...</p>
      </Link>
      <div className="flex gap-2">
        <button onClick={() => onDeletePost(post.id)} className="bg-red-500">
          Supprimer
        </button>
        <button onClick={() => setEditing(true)} className="bg-orange-500">
          Modifier
        </button>
      </div>
    </div>
  );
};

export default PostItem;
