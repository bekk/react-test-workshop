import { render } from "@testing-library/react";
import React from "react";

test("button renders with some text", () => {
  // Oppgave 1b)
});

test("button should call onClick when clicked", () => {
  let counter = 0;
  function increment() {
    counter++;
  }
  const { getByText } = render(<button onClick={increment}>increment</button>);

  // Find the element and check that counter=0
  const button = getByText(/increment/i);
  expect(counter).toBe(0);

  // Oppgave 1c)
});
