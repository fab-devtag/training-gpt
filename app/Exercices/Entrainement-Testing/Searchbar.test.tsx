import { act, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("Searchbar", () => {
  it("ne lance la recherche qu'après 500ms", async () => {
    jest.useFakeTimers();
    const mockSearch = jest.fn();

    render(<SearchBar onSearch={mockSearch} />);
    await userEvent.type(screen.getByRole("textbox"), "react");
    expect(mockSearch).not.toHaveBeenCalled();
    act(() => jest.advanceTimersByTime(500));
    expect(mockSearch).toHaveBeenCalledWith("react");
    jest.useRealTimers();

    //PROBLEME AVEC ONSEARCH PARCE QUE CEST PAS DANS LE COMPOSANT DE BASE
  });
});
