"use client";
import { useLocalStorage } from "./useLocalStorage";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
