import { FormEvent, useState } from "react";

interface Props {
  addPost: (postTitle: string, postContent: string) => void;
  addingPost: boolean;
}

const AddPostForm = ({ addPost, addingPost }: Props) => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(postTitle, postContent);
    setPostTitle("");
    setPostContent("");
  };
  return (
    <form className="flex flex-col w-48 gap-2 my-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-white text-black"
        placeholder="Titre"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <textarea
        className="bg-white text-black"
        placeholder="Contenu"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <input
        type="submit"
        value={addingPost ? "Envoi..." : "Envoyer"}
        className="bg-amber-500 text-black disabled:bg-gray-400"
        disabled={!postTitle || !postContent || addingPost}
      />
    </form>
  );
};

export default AddPostForm;
