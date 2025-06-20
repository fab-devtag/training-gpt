export interface Todo {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

export type FilterType = "Tous" | "Terminés" | "A faire";
export type OrderType = "asc" | "desc";
