// TODO: Créez l'interface ButtonProps avec :
// - children: ReactNode
// - onClick?: fonction (MouseEvent<HTMLButtonElement>) => void
// - variant?: "primary" | "secondary" | "danger"
// - disabled?: boolean
// - type?: "button" | "submit" | "reset"

import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-orange-500 hover:bg-orange-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} px-4 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};
