import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("affiche le label", () => {
    const onChange = jest.fn();
    render(<Input label="Email" value="" onChange={onChange} />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  it("affiche un astérisque si required", () => {
    const onChange = jest.fn();
    render(<Input label="" value="" onChange={onChange} required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });
  it("appelle onChange quand on tape", async () => {
    const onChange = jest.fn();
    render(<Input label="Typing" value="" onChange={onChange} />);
    await userEvent.type(screen.getByLabelText("Typing"), "Fabien");
    expect(onChange).toHaveBeenCalledTimes(6);
  });
  it("'affiche le message d'erreur", () => {
    const onChange = jest.fn();
    render(
      <Input
        label="Error"
        value=""
        onChange={onChange}
        error="Email invalide"
        required
      />
    );
    expect(screen.getByText("Email invalide")).toBeInTheDocument();
  });
  it("utilise le bon type d'input", () => {
    const { rerender } = render(
      <Input label="Test" value="" onChange={() => {}} type="password" />
    );

    const input = screen.getByLabelText("Test");
    expect(input).toHaveAttribute("type", "password");

    rerender(<Input label="Test" value="" onChange={() => {}} type="email" />);
    const input2 = screen.getByLabelText("Test");
    expect(input2).toHaveAttribute("type", "email");
  });
});
