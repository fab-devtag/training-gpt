import { useMemo, memo } from "react";
import { Article } from "./articlesReducer";
import { useArticles } from "./articlesContext";

export const ArticlesList = () => {
  const { articles, filter, sort, dispatch } = useArticles();
  const filteredArticles = useMemo(() => {
    let list = [...articles];
    if (filter) {
      list = list.filter(
        (article) => article.category.toLowerCase() === filter.toLowerCase()
      );
    }

    list.sort((a, b) => {
      if (sort === "asc") return a.title > b.title ? 1 : -1;
      else if (sort === "desc") return a.title > b.title ? -1 : 1;
      return 0;
    });

    return list;
  }, [filter, sort, articles]);

  return (
    <div className="space-y-2">
      <h1>Articles</h1>

      <div className="flex space-x-2">
        <label>Filter par :</label>
        <button onClick={() => dispatch({ type: "filter", payload: "tech" })}>
          Tech
        </button>
        <button onClick={() => dispatch({ type: "filter", payload: "sport" })}>
          Sport
        </button>
        <button
          onClick={() => dispatch({ type: "filter", payload: "lifestyle" })}
        >
          Lifestyle
        </button>
      </div>

      <div className="flex space-x-2">
        <label>Trier par :</label>
        <button onClick={() => dispatch({ type: "sort", payload: "asc" })}>
          ASC
        </button>
        <button onClick={() => dispatch({ type: "sort", payload: "desc" })}>
          DESC
        </button>
      </div>

      <div>
        {filteredArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

const ArticleItem = memo(({ article }: { article: Article }) => {
  return (
    <div className="flex space-x-2">
      <p>{article.title} |</p>
      <p>{article.category}</p>
    </div>
  );
});
