import React, { useContext, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import {
  todolistContext,
  TodolistContextType,
} from "../providers/TodolistContext";

export function AddTodo() {
  const { addTodo } = useContext<TodolistContextType>(todolistContext);
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
