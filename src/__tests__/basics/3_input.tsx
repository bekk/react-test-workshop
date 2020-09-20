import { render } from "@testing-library/react";
import React from "react";

test("typing in the input should change its value", () => {
  const { getByRole } = render(<input />);
  const input = getByRole("textbox");

  // Oppgave 1d)
});

// Oppgave 1e)
/* expect.extend(toHaveNoViolations);
test("input should be accessible", async () => {
  const { container } = render(<input />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}); */

test("input should be connected to a label", () => {
  // Oppgave 1f)
});
