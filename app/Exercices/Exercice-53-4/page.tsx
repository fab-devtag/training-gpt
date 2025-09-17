"use client";
import {
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { notes } from "./store/noteStore";
import { Note, NoteForm } from "./types";

type Filter = "Toutes" | "Publiques" | "Privées";

export default function Home() {
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<NoteForm>({
    title: "",
    content: "",
    isPrivate: false,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortedNotesBy, setSortedNotesBy] = useState<Filter>("Toutes");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const notesPerPage = 5;

  const fetchNotes = async (): Promise<Note[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([...notes]), 300));
  };

  useEffect(() => {
    async function loadNotes() {
      const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
      setNotesList(storedNotes.length > 0 ? storedNotes : await fetchNotes());
    }
    loadNotes();
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  const deleteNote = useCallback((id: number) => {
    setNotesList((prev) => prev.filter((note) => note.id !== id));
  }, []);

  const addNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const noteToAdd: Note = {
      ...newNote,
      id: Date.now(),
      createdAt: Date.now().toString(),
    };

    setNotesList((prev) => [...prev, noteToAdd]);

    setNewNote({
      title: "",
      content: "",
      isPrivate: false,
    });
  };

  const editNote = useCallback((editedNote: Note) => {
    setNotesList((prev) =>
      prev.map((note) => (note.id === editedNote.id ? editedNote : note))
    );
  }, []);

  //Pour avoir le nombre total d'élements
  const totalFilteredNotes = useMemo(() => {
    return notesList
      .filter((note) => {
        if (sortedNotesBy === "Privées") return note.isPrivate;
        if (sortedNotesBy === "Publiques") return !note.isPrivate;
        return true;
      })
      .filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [notesList, searchTerm, sortedNotesBy]);

  //Récupérer les éléments courants dont on a besoin pour la pagination
  const filteredNotes = useMemo(() => {
    return totalFilteredNotes.slice(
      (currentPage - 1) * notesPerPage,
      currentPage * notesPerPage
    );
  }, [totalFilteredNotes, currentPage]);
  return (
    <div className="space-y-2">
      <h1>Journal de bord</h1>
      <div className="space-x-2">
        <div>
          <select
            className="text-black bg-white"
            value={sortedNotesBy}
            onChange={(e) => setSortedNotesBy(e.target.value as Filter)}
          >
            <option>Toutes</option>
            <option>Publiques</option>
            <option>Privées</option>
          </select>
        </div>
        <label>Recherche par titre</label>
        <input
          className="bg-white text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <form onSubmit={addNote} className="space-y-1">
        <h2>Ajouter une note</h2>
        <div className="space-x-2">
          <label>Titre</label>
          <input
            type="text"
            className="bg-white text-black"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
        </div>
        <div className="space-x-2">
          <label>Contenu</label>
          <input
            type="text"
            className="bg-white text-black"
            value={newNote.content}
            onChange={(e) =>
              setNewNote({ ...newNote, content: e.target.value })
            }
          />
        </div>
        <div className="space-x-2">
          <label>Privée</label>
          <input
            type="checkbox"
            checked={newNote.isPrivate}
            onChange={(e) =>
              setNewNote({ ...newNote, isPrivate: e.target.checked })
            }
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
      <h2>Liste des notes</h2>
      <div>
        {currentPage !== 1 && (
          <button onClick={() => setCurrentPage((prev) => prev - 1)}>
            Précédent
          </button>
        )}
        {currentPage < Math.ceil(totalFilteredNotes.length / notesPerPage) && (
          <button onClick={() => setCurrentPage((prev) => prev + 1)}>
            Suivant
          </button>
        )}
      </div>
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={deleteNote}
          onEditNote={editNote}
        />
      ))}
    </div>
  );
}

const NoteItem = memo(
  ({
    note,
    onDeleteNote,
    onEditNote,
  }: {
    note: Note;
    onDeleteNote: (id: number) => void;
    onEditNote: (note: Note) => void;
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState<Note>(note);

    useEffect(() => {
      setEditedNote(note);
    }, [note]);

    return (
      <div className="flex space-x-1">
        {isEditing ? (
          <input
            className="bg-white text-black"
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
          />
        ) : (
          <p>{note.title}</p>
        )}
        {isEditing ? (
          <input
            className="bg-white text-black"
            type="text"
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
          />
        ) : (
          <p>{note.content}</p>
        )}
        {isEditing ? (
          <input
            type="checkbox"
            checked={editedNote.isPrivate}
            onChange={(e) =>
              setEditedNote({ ...editedNote, isPrivate: e.target.checked })
            }
          />
        ) : (
          <p>{note.isPrivate ? "🔒" : ""}</p>
        )}
        {isEditing ? (
          <button
            onClick={() => {
              onEditNote(editedNote);
              setIsEditing(false);
            }}
          >
            Sauvegarder
          </button>
        ) : (
          <button onClick={() => onDeleteNote(note.id)}>Supprimer</button>
        )}
        {isEditing ? (
          <button
            onClick={() => {
              setEditedNote(note);
              setIsEditing(false);
            }}
          >
            Annuler
          </button>
        ) : note.isPrivate ? null : (
          <button onClick={() => setIsEditing(true)}>Editer</button>
        )}
      </div>
    );
  }
);
