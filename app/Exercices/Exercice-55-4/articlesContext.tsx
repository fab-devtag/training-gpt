import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  ArticleState,
  ArticleAction,
  articleReducer,
  initialState,
} from "./articlesReducer";

type ArticlesContextType = ArticleState & {
  dispatch: React.Dispatch<ArticleAction>;
};

const ArticlesContext = createContext<ArticlesContextType | undefined>(
  undefined
);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticlesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles doit être utilisé dans un ArticlesProvider");
  }
  return context;
};
