import { ShoppingCart } from "../Entrainement-UseReducer/ShoppingCart";
import { LoginForm } from "./components/LoginForm";
import { NotificationAlert } from "./components/NotificationAlert";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { TodoApp } from "./components/TodoApp";
import { AppProviders } from "./contexts/AppProviders";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TodoProdiver } from "./contexts/TodoContext";

export default function Main() {
  return (
    <div>
      <AppProviders>
        {/*  <ThemeSwitcher />
        <LoginForm />
        <TodoApp />
        <ShoppingCart /> */}
        <NotificationAlert />
      </AppProviders>
    </div>
  );
}
