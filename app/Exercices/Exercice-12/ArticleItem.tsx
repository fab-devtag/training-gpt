import Link from "next/link";
import { Article } from "./articles";

interface Props {
  article: Article;
}

const ArticleItem = ({ article }: Props) => {
  return (
    <Link
      className="flex space-x-3"
      href={`/Exercices/Exercice-12/${article.id}`}
    >
      <h1>{article.title}</h1>
      <i>{article.author}</i>
    </Link>
  );
};

export default ArticleItem;
