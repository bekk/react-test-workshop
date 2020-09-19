import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

test("input renders with some text", () => {
  // render an input which should update inputValue when something is typed into the input
  const { getByRole } = render(<input />);

  // use a getBy-query to get the input element from the container
  const input = getByRole("textbox");
  expect(input).toHaveValue("");

  // Use user-event to type something
  userEvent.type(input, "I'm not a robot!");
  expect(input).toHaveValue("I'm not a robot!");
});

test("input should be connected to label", () => {
  const { getByLabelText } = render(
    <div>
      <label htmlFor="my-input">Did you finish all your tasks?</label>
      <input id="my-input" />
    </div>
  );

  const input = getByLabelText(/finish/i);
  userEvent.type(input, "No!");
  expect(input).toHaveValue("No!");
});
