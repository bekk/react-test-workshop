import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList, Todo } from "components/TodoList";
import { toHaveNoViolations, axe } from "jest-axe";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

// Oppgava 1
test("renders a TodoList with the title 'List'", () => {
  // 1. Render an empty <TodoList />
  const { getByText, debug } = render(
    <TodoList todoList={[]} removeTodo={() => {}} />
  );

  // debug() can be used to check what is currently being rendered to ease debugging.
  // debug() // <-- remove this comment

  // 2. Use `getByText` and `toBeInTheDocument` to check that TodoList renders the text 'List'
  const listElement = getByText(/list/i);
  expect(listElement).toBeInTheDocument();
});

// Oppgava 2
test("tells the user that all task are completed if todoList is empty", () => {
  // 1. Render an empty <TodoList />
  // 2. Use `getByText` and `toBeInDocument` to check that the empty TodoList
  //    tells the user that all tasks have been completed.
});

// Oppgava 3
test("renders the list given as input", () => {
  // 1. Send a list into <TodoList< and render it
  const list: Todo[] = [
    { text: "input 1", id: 1 },
    { text: "input 2", id: 2 },
  ];
  // 2. Use `getByText` to check that the elements in the list renders
});

// Oppgava 4
test("the removeTodo function can alter the input", async () => {
  // 1. Send a list and a function that pops this list into <TodoList>
  const list: Todo[] = [{ text: "input 1", id: 1 }];
  const { getByText, getByLabelText, rerender } = render(
    <TodoList
      todoList={list}
      removeTodo={() => {
        list.pop();
      }}
    />
  );
  // 2. Use `getByText` to check that the elements in the list renders

  // 3. Use `getByLabelText`and ´fireEvent.click` to click on the delete button

  // 4. Render the list again with `rerender`

  // 5. Check that there are no more tasks in the list
});

// Oppgava 5
// Use `jest-axe` to find if the component is accessible.
expect.extend(toHaveNoViolations);
/* test("the todo list is accessible", async () => {
  const list: Todo[] = [
    { text: "input 1", id: 1 },
    { text: "input 2", id: 2 },
  ];
  const { container, debug } = render(
    <TodoList todoList={list} removeTodo={() => {}} />
  );
  debug();
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}); */
