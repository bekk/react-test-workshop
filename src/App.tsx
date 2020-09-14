import React, { FunctionComponent, useState } from "react";
import { TasksProvider } from "./providers/TodolistContext";
import { saveTodoListToDatabase } from "./api/api";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./domain/Todo";
import { TodoList } from "./components/TodoList";

const App: FunctionComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const updatedTodoList = todoList.concat(todo);
    setTodoList(updatedTodoList);
    saveTodoListToDatabase(updatedTodoList);
  };

  const removeTodo = (id: number) => {
    const updatedTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(updatedTodoList);
    saveTodoListToDatabase(updatedTodoList);
  };

  return (
    <>
      <TasksProvider>
        <h1>Simple to-do list</h1>
        Add things that you need to do here, and then remove them when you've
        solved them!
        <TodoList removeTodo={removeTodo} />
        <AddTodo addTodo={addTodo} />
        <h2>Developers notes (DELETE ME)</h2>
        <p>
          In order to use mocking and create several interactions with the
          server ....
        </p>
        <ul>
          <li>when app starts it fetches exixting todos</li>
          <li>
            when user enters a new task it creates a new task in the backend
            with a POST and triggers a new GET + rerender
          </li>
          <li>
            when user deletes a task it sends a DELETE to the backend and
            triggers a new fetch + rerender
          </li>
        </ul>
      </TasksProvider>
    </>
  );
};

export default App;
