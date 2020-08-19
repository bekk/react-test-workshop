import { useState } from "react";
import React from "react";
import { Todo } from "./TodoList";

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export function AddTodo({ addTodo }: AddTodoProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    addTodo({ text: input, id: Math.random() });
    setInput("");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
