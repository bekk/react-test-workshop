import React from "react";
import { render } from "@testing-library/react";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

// Oppgava 1
// 1. Render a paragraph with some text in it with the `render`-function from @testing-library-react.
// 2. Use getByText to check that element contains the given text.
// 3. Check that the element returned by getByText is rendered in the document.

test("renders a paragraph with the text 'Hello world'", () => {
  const { getByText } = render(<></>);
  // const paragraphElement = getByText();
  // expect(paragraphElement).toBeInTheDocument();
});
