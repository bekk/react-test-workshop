import React, { FunctionComponent, useContext } from "react";
import { RestStatus } from "./api/api-utils";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import {
  TasksProvider,
  todolistContext,
  TodolistContextType,
} from "./providers/TodolistContext";

const App: FunctionComponent = () => {
  return (
    <>
      <TasksProvider>
        <AppContent />
      </TasksProvider>
    </>
  );
};

const AppContent: FunctionComponent = () => {
  const { restTodolist, addTodo, deleteTodo } = useContext<TodolistContextType>(
    todolistContext
  );

  if (restTodolist.status === RestStatus.Success) {
    return (
      <>
        <h1>Simple to-do list</h1>
        Add things that you need to do here, and then remove them when you've
        solved them!
        <TodoList
          todoList={restTodolist.data.todoList}
          deleteTodo={deleteTodo}
        />
        <AddTodo addTodo={addTodo} />
      </>
    );
  } else {
    return (
      <>
        <h1>Simple to-do list</h1>
        <p>No connection with database: {restTodolist.status} </p>
        <p>Find out how to start the backend in the README file :)</p>
      </>
    );
  }
};

export default App;
