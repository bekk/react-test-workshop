import React, { FunctionComponent } from "react";
import { TasksProvider } from "./providers/TodolistContext";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: FunctionComponent = () => {
  return (
    <>
      <TasksProvider>
        <h1>Simple to-do list</h1>
        Add things that you need to do here, and then remove them when you've
        solved them!
        <TodoList />
        <AddTodo />
      </TasksProvider>
    </>
  );
};

export default App;
