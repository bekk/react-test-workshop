import { useState } from "react";
import React from "react";
import { Todo } from "../domain/Todo";
import InputWithLabel from "./InputWithLabel";

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
      <h2>Add item:</h2>
      <InputWithLabel
        label="New item:"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
