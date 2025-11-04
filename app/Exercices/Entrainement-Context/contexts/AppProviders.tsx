import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { TodoProdiver } from "./TodoContext";
import { CartProvider } from "./CartContext";
import { NotificationProvider } from "./NotificationContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>
          <TodoProdiver>
            <CartProvider>{children}</CartProvider>
          </TodoProdiver>
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};
