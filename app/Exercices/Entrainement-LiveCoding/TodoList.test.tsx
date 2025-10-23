import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
  // 🧩 1. Initialisation
  describe("Initialisation", () => {
    it("affiche une liste vide au départ", () => {
      render(<TodoList />);
      expect(
        screen.getByText("Aucun élément dans la liste")
      ).toBeInTheDocument();
    });

    it("affiche le compteur à 0 items left", () => {
      render(<TodoList />);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /0\s*restant/
      );
    });
  });

  describe("Ajout", () => {
    it("ajoute une todo dans la liste", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByText("Coder une application")).toBeInTheDocument();
    });

    it("vide le champ d'entrée après ajout", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
    });
  });

  describe("Toggle", () => {
    it("marque une todo comme complétée quand on clique dessus", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.click(screen.getByRole("checkbox"));
      expect(screen.getByText("Coder une application")).toHaveClass(
        "line-through"
      );
    });

    it("met à jour le compteur après avoir coché une todo", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /1\s*restant/
      );
      await userEvent.click(screen.getByRole("checkbox"));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /0\s*restant/
      );
    });
  });

  describe("Suppression", () => {
    it("retire la todo du DOM quand on clique sur 'supprimer'", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByText("Coder une application")).toBeInTheDocument();
      await userEvent.click(screen.getByText("Supprimer"));
      expect(
        screen.queryByText("Coder une application")
      ).not.toBeInTheDocument();
    });
  });
  describe("Filtres", () => {
    it("le filtre 'Completed' affiche uniquement les todos complétées", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.type(screen.getByRole("textbox"), "Tester avec Jest");
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.type(screen.getByRole("textbox"), "Noter les matchs");
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.click(screen.getAllByRole("checkbox")[0]);

      await userEvent.click(screen.getByText("Terminées"));

      expect(screen.queryByText("Tester avec Jest")).not.toBeInTheDocument();
      expect(screen.queryByText("Noter les matchs")).not.toBeInTheDocument();
      expect(screen.queryByText("Coder une application")).toBeInTheDocument();
    });

    it("le filtre 'All' réaffiche toutes les todos", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.type(screen.getByRole("textbox"), "Tester avec Jest");
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.type(screen.getByRole("textbox"), "Noter les matchs");
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.click(screen.getAllByRole("checkbox")[0]);

      await userEvent.click(screen.getByText("Terminées"));

      expect(screen.queryByText("Tester avec Jest")).not.toBeInTheDocument();
      expect(screen.queryByText("Noter les matchs")).not.toBeInTheDocument();
      expect(screen.queryByText("Coder une application")).toBeInTheDocument();

      await userEvent.click(screen.getByText("Tous"));
      expect(screen.queryByText("Tester avec Jest")).toBeInTheDocument();
      expect(screen.queryByText("Noter les matchs")).toBeInTheDocument();
      expect(screen.queryByText("Coder une application")).toBeInTheDocument();
    });
  });
  describe("Compteur", () => {
    it("affiche le texte correct au singulier", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /1\s*restant/
      );
    });

    it("affiche le texte correct au pluriel", async () => {
      render(<TodoList />);
      await userEvent.type(
        screen.getByRole("textbox"),
        "Coder une application"
      );
      await userEvent.click(screen.getByText("Ajouter"));
      await userEvent.type(screen.getByRole("textbox"), "Faire du pain");
      await userEvent.click(screen.getByText("Ajouter"));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /2\s*restants/
      );
    });
  });
});
