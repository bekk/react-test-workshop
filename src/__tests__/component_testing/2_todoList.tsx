import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "components/TodoList";
import { toHaveNoViolations, axe } from "jest-axe";
import { Todo } from "domain/Todo";

test("TodoList should render with the title 'List'", () => {
  // Oppgave 2d)
});

test("TodoList is accessible", async () => {
  // Oppgave 2e)
});

test("TodoList should show the list given as input", () => {
  // Oppgave 2f)
});
