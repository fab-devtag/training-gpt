import { screen, render } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  it("affiche le formulaire", () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button"));
  });
  it("appelle onsubmit avec les bonnes valeurs", async () => {
    const mockSubmit = jest.fn().mockResolvedValue(undefined);
    render(<LoginForm onSubmit={mockSubmit} />);
    await userEvent.type(screen.getByLabelText(/email/i), "fabien@test.com");
    await userEvent.type(screen.getByLabelText(/password/i), "testpassword");
  });
  it("affiche une erreur si les champs sont vides", async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Tous les champs sont requis")).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });
  it("affiche une erreur si l'email est invalide", async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    await userEvent.type(screen.getByLabelText(/email/i), "invalidemail");
    await userEvent.type(screen.getByLabelText(/password/i), "password123");
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Email invalide")).toBeInTheDocument(); //Il faut le no validate dans le form ici à cause de l'input 'email'
  });
  it("affiche le loading pendant la soumission", async () => {
    const mockSubmit = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100))
      );
    render(<LoginForm onSubmit={mockSubmit} />);
    await userEvent.type(screen.getByLabelText(/email/i), "fabien@test.com");
    await userEvent.type(screen.getByLabelText(/password/i), "testpassword");
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Connexion...")).toBeInTheDocument();
  });
  it("affiche l'erreur retournée par onSubmit", async () => {
    const mockSubmit = jest
      .fn()
      .mockRejectedValue(new Error("Indentifiants incorrects"));
    render(<LoginForm onSubmit={mockSubmit} />);
    await userEvent.type(screen.getByLabelText(/email/i), "fabien@test.com");
    await userEvent.type(screen.getByLabelText(/password/i), "testpassword");
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Indentifiants incorrects")).toBeInTheDocument();
  });
});
