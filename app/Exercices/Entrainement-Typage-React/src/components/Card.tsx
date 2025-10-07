// TODO: Interface CardProps avec :
// - title: string
// - children: ReactNode
// - footer?: ReactNode
// - onHeaderClick?: () => void

import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onHeaderClick?: () => void;
}

export const Card = ({ title, children, footer, onHeaderClick }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div
        className="bg-gray-400 p-4 border-b"
        onClick={onHeaderClick}
        style={{ cursor: onHeaderClick ? "pointer" : "default" }}
      >
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="p-4">{children}</div>
      {footer && <div className="bg-gray-50 p-4 border-t">{footer}</div>}
    </div>
  );
};
