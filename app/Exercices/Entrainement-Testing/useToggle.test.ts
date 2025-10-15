import { renderHook, act } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  // Test 1 : Valeur initiale
  it("démarre avec la valeur initiale", () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current[0]).toBe(false);
  });

  // Test 2 : Toggle
  it("change la valeur quand on appelle toggle", () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => result.current[1]());

    expect(result.current[0]).toBe(false);
  });

  // Test 3 : Toggle multiple fois
  it("toggle plusieurs fois correctement", () => {
    const { result } = renderHook(() => useToggle(false));
    act(() => result.current[1]());
    act(() => result.current[1]());
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
});

//Quelques explications sur sur comment fonctionne le test d'un hook, renderhook, le current 0 et 1 etc parce que pas tout compris
