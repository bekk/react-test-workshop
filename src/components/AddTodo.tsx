import { useState } from "react";
import React from "react";

type AddTodoProps = {
  todoList: string[];
  setTodoList: (todoList: string[]) => void;
};

export function AddTodo({ todoList, setTodoList }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    setTodoList(todoList.concat(newTodo));
    setNewTodo("");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
