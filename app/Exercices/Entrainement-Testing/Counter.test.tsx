import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("Le counter est initialisé à 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0"));
  });
  it("incrémente quand on clique sur Increment", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Count: 1"));
  });
  it("incrémente quand on clique sur Decrement", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("Count: -1"));
  });
  it("remet à 0 quand on clique sur Reset", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("Count: 0"));
  });
  it("gère plusieurs clics correctement", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("Count: 2"));
  });
});
