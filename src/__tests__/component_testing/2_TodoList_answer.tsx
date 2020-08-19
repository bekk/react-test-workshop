import React from "react";
import { render } from "@testing-library/react";
import { TodoList } from "components/TodoList";

// API documentation at https://testing-library.com/docs/dom-testing-library/api-queries

// Oppgava 1
// 1. Render an empty <TodoList />:
//       <TodoList todoList={[]} removeTodo={() => {}} />
// 2. Use `getByText` and `toBeInTheDocument` to check that TodoList
//    renders the text 'List'
test("renders a TodoList with the title 'List'", () => {
  const { getByText } = render(
    <TodoList todoList={[]} removeTodo={() => {}} />
  );
  const listElement = getByText(/list/i);
  expect(listElement).toBeInTheDocument();
});

// Oppgava 2
// 1. Render an empty <TodoList />
// 2. Use `getByText` and `toBeInDocument` to check that the empty TodoList
//    tells the user that all tasks have been completed.
test("tells the user that all task are completed if todoList is empty", () => {
  const { getByText } = render(
    <TodoList todoList={[]} removeTodo={() => {}} />
  );
  const paragraphElement = getByText(/you've finished all your tasks!/i);
  expect(paragraphElement).toBeInTheDocument();
});
