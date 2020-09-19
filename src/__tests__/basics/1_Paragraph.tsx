import { render } from "@testing-library/react";
import React from "react";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

test("paragraph renders with some text", () => {
  /* `render` renders the input element (in this case a paragraph)
      in a container and appends it to document.body */
  const { getByText } = render(
    <p>All code is guilty, until proven innocent.</p>
  );
  /* `render` exposes different queries that can be used to find elements in 
     the rendered container. In this case we use `getByText` to find
     an element that contains the text "velkommen" */
  const paragraph = getByText(/code/i);

  // assert whether the element is in the document or not
  expect(paragraph).toBeInTheDocument();
});
