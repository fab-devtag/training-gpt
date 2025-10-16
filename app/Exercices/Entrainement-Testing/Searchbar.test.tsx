import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("ne lance la recherche qu'après 500ms", () => {
    // ⬅️ Pas async
    jest.useFakeTimers();
    const mockSearch = jest.fn();

    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByRole("textbox");

    // ✅ fireEvent est synchrone avec fake timers
    fireEvent.change(input, { target: { value: "react" } });

    // Vérifier qu'onSearch n'est pas encore appelé
    expect(mockSearch).not.toHaveBeenCalled();

    // Avancer le temps de 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Maintenant onSearch devrait être appelé
    expect(mockSearch).toHaveBeenCalledWith("react");

    jest.useRealTimers();
  });
});
