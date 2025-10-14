import { render, screen, waitFor } from "@testing-library/react";
import { UserList } from "./UserList";

global.fetch = jest.fn();

//Explication sur mockReset fetch as jest.mock et before each, explication global du fichier de test car pas compris
describe("UserList", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockReset();
  });

  it("affiche le loading au début", () => {
    (fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(<UserList />);
    screen.getByText("Chargement...");
  });

  it("affiche les utilisateurs après le fetch", async () => {
    const mockUsers = [
      { id: 1, name: "Delphine", email: "delphine@test.com" },
      { id: 2, name: "Fabien", email: "fabien@test.com" },
    ];

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    });

    render(<UserList />);
    const element = await screen.findByText(/Delphine/);
    expect(element).toBeInTheDocument();
    expect(screen.getByText(/Fabien/)).toBeInTheDocument();
  });

  it("affiche une erreur si le fetch échoue", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));
    render(<UserList />);
    const element = await screen.findByText("Erreur: Network error");
    expect(element).toBeInTheDocument();
  });

  it("gère les erreurs HTTP", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    render(<UserList />);
    const element = await screen.findByText("Erreur: Failed to fetch");
    expect(element).toBeInTheDocument();
  });
});
