import React, { FunctionComponent, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { Todo } from "../domain/Todo";

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo: FunctionComponent<AddTodoProps> = (props) => {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    props.addTodo({ text: input, id: Math.random() });
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
};
