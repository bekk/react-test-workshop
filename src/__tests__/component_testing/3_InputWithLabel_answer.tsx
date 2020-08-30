import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputWithLabel from "components/InputWithLabel";

test("CustomInput should render label and input", () => {
  const { getByText, getByLabelText } = render(
    <InputWithLabel label="etikett" />
  );

  const label = getByText(/etikett/i);
  expect(label).toBeInTheDocument();

  const input = getByLabelText(/etikett/i);
  expect(input).toBeInTheDocument();
});

test("CustomInput should change value when the input is changed", () => {
  const { getByLabelText } = render(
    <InputWithLabel label="Ananas eller banan på pizza?" />
  );

  const input = getByLabelText(/pizza/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");

  fireEvent.change(input, { target: { value: "ananas!" } });
  expect(input).toHaveValue("ananas!");
});
