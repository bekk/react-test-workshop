import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList, Todo } from "components/TodoList";
import { toHaveNoViolations, axe } from "jest-axe";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

// Oppgava 1
test("renders a TodoList with the title 'List'", () => {
  // 1. Render an empty <TodoList />
  const { getByText } = render(
    <TodoList todoList={[]} deleteTodo={() => {}} />
  );

  // 2. Use `getByText` and `toBeInTheDocument` to check that TodoList renders the title 'list'
  const title = getByText(/list/i);
  expect(title).toBeInTheDocument();
});

// Oppgava 2
test("tells the user that all task are completed if todoList is empty", () => {
  // 1. Render an empty <TodoList />
  const { getByText } = render(
    <TodoList todoList={[]} deleteTodo={() => {}} />
  );

  // 2. Use `getByText` and `toBeInDocument` to check that the empty TodoList
  //    tells the user that all tasks have been completed.
  const todolist = getByText(/you've finished all your tasks!/i);
  expect(todolist).toBeInTheDocument();
});

// Oppgava 3
test("renders the list given as input", () => {
  // 1. Send a list into <TodoList< and render it
  const list: Todo[] = [
    { text: "input 1", id: 1 },
    { text: "input 2", id: 2 },
  ];
  const { getByText } = render(
    <TodoList todoList={list} deleteTodo={() => {}} />
  );
  // 2. Use `getByText` to check that the elements in the list renders
  const element1 = getByText(/input 1/i);
  expect(element1).toBeInTheDocument();
  const element2 = getByText(/input 2/i);
  expect(element2).toBeInTheDocument();
});

// Oppgava 4
test("the removeTodo function can alter the input", async () => {
  // 1. Send a list and a function that pops this list into <TodoList>
  const list: Todo[] = [{ text: "input 1", id: 1 }];
  const { getByText, getByLabelText, rerender } = render(
    <TodoList
      todoList={list}
      deleteTodo={() => {
        list.pop();
      }}
    />
  );
  // 2. Use `getByText` to check that the elements in the list renders
  const todo = getByText(/input 1/i);
  expect(todo).toBeInTheDocument();

  // 3. Use `getByLabelText`and ´fireEvent.click` to click on the delete button
  const button = getByLabelText(/input 1/i);
  await fireEvent.click(button);

  // 4. Render the list again with `rerender`
  rerender(
    <TodoList
      todoList={list}
      deleteTodo={() => {
        list.pop();
      }}
    />
  );

  // 5. Check that there are no more tasks in the list
  const todolist = getByText(/you've finished all your tasks!/i);
  expect(todolist).toBeInTheDocument();
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
