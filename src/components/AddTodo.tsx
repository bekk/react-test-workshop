import React, { FunctionComponent, useState } from "react";
import { Todo } from "../domain/Todo";

type AddTodoProps = {
  onSubmit: (todo: Todo) => void;
};

export const AddTodo: FunctionComponent<AddTodoProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ text: input, id: Math.random() });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item:</h2>
      <label style={{ display: "block" }} htmlFor="input-with-label">
        New item:
      </label>
      <input
        id="input-with-label"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
