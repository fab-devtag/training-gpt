export interface Note {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  createdAt: string;
}

export type NoteForm = {
  title: string;
  content: string;
  isPrivate: boolean;
};
