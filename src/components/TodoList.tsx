import React, { FunctionComponent, useContext } from "react";
import { TodoItem } from "./TodoItem";
import { RestStatus } from "../api/api-utils";
import {
  todolistContext,
  TodolistContextType,
} from "../providers/TodolistContext";

export const TodoList: FunctionComponent = () => {
  const { restTodolist } = useContext<TodolistContextType>(todolistContext);

  const todos =
    restTodolist.status === RestStatus.Success
      ? restTodolist.data.todoList
      : [];
  const isEmpty = todos.length === 0;

  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
};
