export type Article = {
  id: number;
  title: string;
  category: string;
};

export type ArticleState = {
  articles: Article[];
  sort: "asc" | "desc";
  filter: string;
};

export type ArticleAction =
  | {
      type: "filter";
      payload: string;
    }
  | { type: "sort"; payload: "asc" | "desc" };

export const initialState: ArticleState = {
  articles: [
    { id: 1, title: "React Hooks Deep Dive", category: "Tech" },
    { id: 2, title: "Football Highlights", category: "Sport" },
    { id: 3, title: "Healthy Living Tips", category: "Lifestyle" },
  ],
  filter: "",
  sort: "asc",
};

export function articleReducer(state: ArticleState, action: ArticleAction) {
  switch (action.type) {
    case "filter":
      return { ...state, filter: action.payload };
    case "sort":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}
