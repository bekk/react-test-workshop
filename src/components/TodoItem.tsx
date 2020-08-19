import React from "react";
import { Todo } from "./TodoList";

export type TodoItemProps = {
  todo: Todo;
  removeTodo: (id: number) => void;
};

export function TodoItem({ todo, removeTodo }: TodoItemProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li>{todo.text}</li>
      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        x
      </button>
    </div>
  );
}
