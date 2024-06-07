import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders corerctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with name", () => {
  render(<Greet name="Tania" />);
  const textElement = screen.getByText("Hello Tania");
  expect(textElement).toBeInTheDocument();
});
