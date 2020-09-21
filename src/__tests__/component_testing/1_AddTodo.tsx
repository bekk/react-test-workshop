import React from "react";
import { render, getByTitle } from "@testing-library/react";
import InputWithLabel from "components/InputWithLabel";
import { toHaveNoViolations, axe } from "jest-axe";
import { AddTodo } from "components/AddTodo";
import userEvent from "@testing-library/user-event";

test("AddTodo should render title, label and input", () => {
  // Oppgave 2a)
});

test("AddTodo should change its value when the user types something", () => {
  // Oppgave 2b)
});

test("AddTodo should be accessible", async () => {
  // Oppgave 2c)
});
