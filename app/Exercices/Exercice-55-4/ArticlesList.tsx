import { useMemo, memo, useState, useEffect } from "react";
import { Article } from "./articlesReducer";
import { useArticles } from "./articlesContext";

export const ArticlesList = () => {
  const { articles, filter, sort, dispatch } = useArticles();
  const [addArticle, setAddArticle] = useState({ title: "", category: "" });

  const filteredArticles = useMemo(() => {
    let list = [...articles];
    if (filter) {
      list = list.filter(
        (article) => article.category.toLowerCase() === filter.toLowerCase()
      );
    }

    list.sort((a, b) => {
      if (sort === "asc")
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      else if (sort === "desc")
        return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
      return 0;
    });

    return list;
  }, [filter, sort, articles]);

  return (
    <div className="space-y-2">
      <h1>Articles</h1>
      <div>
        <div>
          <label>Titre :</label>
          <input
            className="bg-white text-black"
            value={addArticle.title}
            onChange={(e) =>
              setAddArticle({ ...addArticle, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Catégorie :</label>
          <input
            className="bg-white text-black"
            value={addArticle.category}
            onChange={(e) =>
              setAddArticle({ ...addArticle, category: e.target.value })
            }
          />
        </div>
        <button
          onClick={() => {
            dispatch({
              type: "add",
              payload: { ...addArticle, id: Date.now() },
            });
            setAddArticle({ category: "", title: "" });
          }}
        >
          Ajouter
        </button>
      </div>
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
  const { dispatch } = useArticles();
  const [isEditing, setIsEditing] = useState(false);
  const [editArticle, setEditArticle] = useState(article);

  return (
    <div className="flex space-x-2">
      {isEditing ? (
        <input
          value={editArticle.title}
          onChange={(e) =>
            setEditArticle({ ...editArticle, title: e.target.value })
          }
        />
      ) : (
        <p>{article.title} |</p>
      )}
      <p>{article.category}</p>
      {isEditing ? (
        <button
          onClick={() => {
            dispatch({
              type: "edit",
              payload: {
                fields: "title",
                value: editArticle.title,
                id: editArticle.id,
              },
            });
            setIsEditing(false);
          }}
        >
          Sauvegarder
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "remove", payload: article.id })}
        >
          Supprimer
        </button>
      )}
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>Annuler</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Editer</button>
      )}
    </div>
  );
});
