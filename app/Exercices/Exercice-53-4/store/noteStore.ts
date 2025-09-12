import { Note } from "../types";

export let notes: Note[] = [
  {
    id: 1,
    title: "Première note",
    content: "Contenu test",
    isPrivate: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Seconde note",
    content: "Autre contenu",
    isPrivate: true,
    createdAt: new Date().toISOString(),
  },
];
