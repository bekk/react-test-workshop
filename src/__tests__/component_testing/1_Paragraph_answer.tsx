import React from "react";
import { render } from "@testing-library/react";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

test("paragraph renders with some text", () => {
  const { getByText } = render(
    <p>Velkommen / Välkommen / Velkommen / Tervetuloa / Velkominn</p>
  );
  const paragraph = getByText(/välkommen/i);
  expect(paragraph).toBeInTheDocument();
});
