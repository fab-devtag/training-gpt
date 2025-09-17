/* "use client";

import { memo, useMemo, useReducer } from "react";

type Article = {
  id: number;
  title: string;
  category: string;
};

interface IState {
  filter: "sport" | "tech" | "lifestyle" | "";
  sort: "asc" | "desc";
}

interface IAction {
  type: "filter" | "sort";
  payload: any;
}

export default function Home() {
  const articles: Article[] = [
    { id: 1, title: "React Hooks Deep Dive", category: "Tech" },
    { id: 2, title: "Football Highlights", category: "Sport" },
    { id: 3, title: "Healthy Living Tips", category: "Lifestyle" },
    { id: 4, title: "Next.js Routing", category: "Tech" },
    { id: 5, title: "Yoga for Beginners", category: "Lifestyle" },
  ];

  const reducer = (state: IState, action: IAction) => {
    if (action.type === "filter") {
      return {
        ...state,
        filter: action.payload,
      };
    }
    if (action.type === "sort") {
      return {
        ...state,
        sort: action.payload,
      };
    }
    return { ...state };
  };

  const [state, dispatch] = useReducer(reducer, {
    filter: "",
    sort: "asc",
  });

  const filteredArticles = useMemo(() => {
    let list = [...articles];

    if (state.filter) {
      list = list.filter(
        (article) =>
          article.category.toLowerCase() === state.filter.toLowerCase()
      );
    }

    list.sort((a, b) => {
      if (state.sort === "asc") return a.title > b.title ? 1 : -1;
      else if (state.sort === "desc") return a.title > b.title ? -1 : 1;
      return 0;
    });

    return list;
  }, [articles, state.filter, state.sort]);

  return (
    <div className="space-y-2">
      <h1> 53-4 - Evaluation - Liste d’articles filtrable</h1>
      <div className="flex space-x-2">
        <label>Reset les filtres</label>
        <button onClick={() => dispatch({ type: "filter", payload: "" })}>
          Reset
        </button>
      </div>
      <div className="flex space-x-2">
        <label>Filter par :</label>
        <div className="space-x-2">
          <button onClick={() => dispatch({ type: "filter", payload: "tech" })}>
            Tech
          </button>
          <button
            onClick={() => dispatch({ type: "filter", payload: "sport" })}
          >
            Sport
          </button>
          <button
            onClick={() => dispatch({ type: "filter", payload: "lifestyle" })}
          >
            Lifestyle
          </button>
        </div>
      </div>
      <div className="flex space-x-2">
        <label>Trier par :</label>
        <div className="space-x-2">
          <button onClick={() => dispatch({ type: "sort", payload: "asc" })}>
            ASC
          </button>
          <button onClick={() => dispatch({ type: "sort", payload: "desc" })}>
            DESC
          </button>
        </div>
      </div>
      <div>
        {filteredArticles.map((article: Article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

const ArticleItem = memo(({ article }: { article: Article }) => {
  return (
    <div className="flex space-x-2">
      <p>{article.title} |</p>
      <p>{article.category}</p>
    </div>
  );
});

 */

"use client";

import { useState, useReducer, useMemo, memo } from "react";

type Article = {
  id: number;
  title: string;
  category: string;
};

type IState = {
  filter: string;
  sort: "asc" | "desc";
};

type IAction =
  | { type: "filter"; payload: string }
  | { type: "sort"; payload: "asc" | "desc" };

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: "React Hooks Deep Dive", category: "Tech" },
    { id: 2, title: "Football Highlights", category: "Sport" },
    { id: 3, title: "Healthy Living Tips", category: "Lifestyle" },
    { id: 4, title: "Next.js Routing", category: "Tech" },
    { id: 5, title: "Yoga for Beginners", category: "Lifestyle" },
  ]);

  const reducer = (state: IState, action: IAction) => {
    if (action.type === "filter") {
      return { ...state, filter: action.payload };
    }
    if (action.type === "sort") {
      console.log("oui");
      console.log(action.payload);
      return { ...state, sort: action.payload };
    }
    return { ...state };
  };
  const [state, dispatch] = useReducer(reducer, { filter: "", sort: "asc" });

  const filteredArticles = useMemo(() => {
    let list = [...articles];
    if (state.filter) {
      list = list.filter(
        (article) =>
          article.category.toLowerCase() === state.filter.toLowerCase()
      );
    }

    list.sort((a, b) => {
      if (state.sort === "asc") return a.title > b.title ? 1 : -1;
      else if (state.sort === "desc") return a.title > b.title ? -1 : 1;
      return 0;
    });

    return list;
  }, [state.filter, state.sort, articles]);

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
}

const ArticleItem = memo(({ article }: { article: Article }) => {
  return (
    <div className="flex space-x-2">
      <p>{article.title} |</p>
      <p>{article.category}</p>
    </div>
  );
});
