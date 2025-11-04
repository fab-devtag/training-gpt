"use client";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};
