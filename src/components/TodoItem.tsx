import React, { FunctionComponent } from "react";
import { Todo } from "../domain/Todo";

export type TodoItemProps = {
  todo: Todo;
  deleteTodo: (id: number) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label htmlFor={`${props.todo.id}`}>{props.todo.text}</label>
      <button
        id={`${props.todo.id}`}
        onClick={() => {
          props.deleteTodo(props.todo.id);
        }}
      >
        x
      </button>
    </div>
  );
};
