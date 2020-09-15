import React, { useContext } from "react";
import { Todo } from "../domain/Todo";
import {
  todolistContext,
  TodolistContextType,
} from "../providers/TodolistContext";

export type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo } = useContext<TodolistContextType>(todolistContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label htmlFor={`${todo.id}`}>{todo.text}</label>
      <button
        id={`${todo.id}`}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        x
      </button>
    </div>
  );
}
