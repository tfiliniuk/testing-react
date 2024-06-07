import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of a 1 after clicking the increment button", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of a 2 after clicking twice the increment button", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
