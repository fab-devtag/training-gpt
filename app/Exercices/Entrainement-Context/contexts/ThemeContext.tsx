"use client";
import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../../Entrainement-CustomHook/useLocalStorage";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  /* setTheme: (theme: Theme) => void; */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, /*  setTheme, */ toggleTheme }}>
      <div className={theme === "dark" ? "bg-black" : "bg-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within ThemeProvider");

  return context;
};

//Mais du coup je n'ai pas besoin de mettre setTheme dans les values non ?
