export type Article = {
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

export type ArticlesContextType = {
  article: Article;
  filter: string;
  sort: "asc" | "desc";
  dispatch: React.Dispatch<IAction>;
};
