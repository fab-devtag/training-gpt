import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("affiche le texte passé en children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applique la classe correct selon le variant", () => {
    render(<Button variant="danger">Hello Danger Variant</Button>);
    expect(screen.getByText("Hello Danger Variant")).toHaveClass("bg-red-500");
  });
  it("est disabled quand la prop disabled est true", () => {
    render(<Button disabled>Hello Disabled</Button>);
    expect(screen.getByText("Hello Disabled")).toBeDisabled();
  });
  it("appelle onClick quand on clique", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Je lance ma fonction</Button>);
    fireEvent.click(screen.getByText("Je lance ma fonction"));
    expect(onClick).toHaveBeenCalled();
  });
  it("appelle pas onClick quand disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Je lance pas ma fonction
      </Button>
    );
    fireEvent.click(screen.getByText("Je lance pas ma fonction"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
