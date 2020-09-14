import React, { FunctionComponent, useContext } from "react";
import { TodoItem } from "./TodoItem";
import { RestStatus, RestTodolist } from "../api/api-utils";
import { todolistContext } from "../providers/TodolistContext";

type TodoListProps = {
  removeTodo: (id: number) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({ removeTodo }) => {
  const restTodolist = useContext<RestTodolist>(todolistContext);
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
            <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
};
