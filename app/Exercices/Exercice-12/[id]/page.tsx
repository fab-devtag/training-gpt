import Link from "next/link";
import { articles } from "../articles";

export default function ArticleDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );

  if (!article) return <div>Aucun article avec cet id</div>;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <i>{article.author}</i>
      <Link href="/Exercices/Exercice-12">Retour au blog</Link>
    </div>
  );
}
