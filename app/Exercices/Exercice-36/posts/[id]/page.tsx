"use client";
import { use } from "react";
import { useFetch } from "../../customHooks";
import { Post } from "../../types";
import Link from "next/link";

export default function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data, isLoading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!data) return;

  return (
    <div>
      <Link href="/Exercices/Exercice-36">Retour à la liste</Link>
      <h1>La post sur : {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
