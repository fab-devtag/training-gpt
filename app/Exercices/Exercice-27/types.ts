export interface Todo {
	id: number;
	title: string;
	done: boolean;
	createdAt: string;
	priority: Priority;
}

export type FilterType = 'Tous' | 'Terminés' | 'A faire';
export type OrderType = 'asc' | 'desc';
export type Priority = 'Faible' | 'Moyenne' | 'Haute';
