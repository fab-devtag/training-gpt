// TODO: Interface générique ListProps<T> avec :
// - items: T[]
// - renderItem: (item: T, index: number) => ReactNode
// - keyExtractor: (item: T, index: number) => string | number
// - emptyMessage?: string
// - loading?: boolean

import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  emptyMessage?: string;
  loading?: boolean;
}

export const List = <T,>({
  items,
  renderItem,
  keyExtractor,
  emptyMessage,
  loading,
}: ListProps<T>) => {
  if (loading) return <div>Chargement...</div>;

  if (items.length === 0) return <div>{emptyMessage || "Aucun élément"}</div>;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item, index)}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
};
