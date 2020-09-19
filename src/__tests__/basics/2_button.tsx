import { fireEvent, render } from "@testing-library/react";
import React from "react";

test("button renders with some text", () => {
  const { getByText, getByRole } = render(
    <button>Klikk for å starte testingen!</button>
  );

  // https://testing-library.com/docs/guide-which-query
  // We can use different queries to find the button:

  // 1. `getByText`
  const buttonByText = getByText(/klikk/i);
  expect(buttonByText).toBeInTheDocument();

  // 2. `getByRole`
  const buttonByRole = getByRole("button", { name: /klikk/i });
  expect(buttonByRole).toBeInTheDocument();
});

test("button should call onClick when clicked", () => {
  // Render a button that should increase `counter` when clicked
  let counter = 0;
  function increment() {
    counter++;
  }
  const { getByText } = render(<button onClick={increment}>increment</button>);

  // Find the element and check that counter=0
  const button = getByText(/increment/i);
  expect(button).toBeInTheDocument();
  expect(counter).toBe(0);

  // click the button and check that counter=1
  fireEvent.click(button);
  expect(counter).toBe(1);

  //
});
