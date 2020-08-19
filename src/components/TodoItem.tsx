import React from "react";
import { Todo } from "./TodoList";

export type TodoItemProps = {
  todo: Todo;
  deleteItem: (id: number) => void;
};

export function TodoItem({ todo, deleteItem }: TodoItemProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li>{todo.text}</li>
      <button
        onClick={() => {
          deleteItem(todo.id);
        }}
      >
        x
      </button>
    </div>
  );
}
