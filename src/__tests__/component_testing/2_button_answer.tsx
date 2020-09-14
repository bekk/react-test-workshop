import React from "react";
import { render, fireEvent } from "@testing-library/react";

test("button renders with some text", () => {
  const { getByText } = render(<button>Klikk for å starte testingen!</button>);
  const button = getByText(/klikk/i);
  expect(button).toBeInTheDocument();
});

test("button should call onClick when clicked", () => {
  let counter = 0;
  const increment = () => counter++;
  const { getByText } = render(<button onClick={increment}>increment</button>);

  const button = getByText(/increment/i);
  expect(button).toBeInTheDocument();
  expect(counter).toBe(0);

  fireEvent.click(button);
  expect(counter).toBe(1);
});
