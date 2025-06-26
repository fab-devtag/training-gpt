"use client";
import { use } from "react";
import { useFetch } from "../../customHooks";
import { Post } from "../../types";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/queryClient";
import { useRouter } from "next/navigation";

export default function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data, isLoading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const router = useRouter();
  const deleteMutation = useMutation({
    mutationFn: async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      }).then(() => id),
    //pas obligé, pas besoin d'optimistic quand on revient après sur la page principale dans tous les cas
    /* onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
      const previousPosts = queryClient.getQueryData([
        "data",
        "https://jsonplaceholder.typicode.com/posts",
      ]);
      queryClient.setQueryData(
        ["data", "https://jsonplaceholder.typicode.com/posts"],
        (oldPost: Post[]) => oldPost.filter((post) => post.id !== parseInt(id))
      );
      return previousPosts;
    }, */
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data", "https://jsonplaceholder.typicode.com/posts"],
      });
      router.push("/Exercices/Exercice-37");
    },
  });

  if (!data) return;

  return (
    <div>
      <Link href="/Exercices/Exercice-37">Retour à la liste</Link>
      <h1>La post sur : {data.title}</h1>
      <p>{data.body}</p>
      <button onClick={() => deleteMutation.mutate()}>Supprimer ce post</button>
    </div>
  );
}
