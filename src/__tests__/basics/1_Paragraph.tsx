import { render } from "@testing-library/react";
import React from "react";

test("paragraph renders with some text", () => {
  const { getByText } = render(
    <p>All code is guilty, until proven innocent.</p>
  );
  // const paragraph = getByText(...);
  // expect(paragraph).toBeInTheDocument();
});
