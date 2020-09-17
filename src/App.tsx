import React, { FunctionComponent, useContext } from "react";
import {
  TasksProvider,
  todolistContext,
  TodolistContextType,
} from "./providers/TodolistContext";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { RestStatus } from "./api/api-utils";

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
      </>
    );
  }
};

export default App;
