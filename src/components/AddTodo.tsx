import { useState } from "react";
import React from "react";
import { saveTodoListToDatabase } from "../api";
import { Todo } from "./TodoList";

type AddTodoProps = {
  todoList: Todo[];
  setTodoList: (todoList: Todo[]) => void;
};

export function AddTodo({ todoList, setTodoList }: AddTodoProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    const todo: Todo = { text: input, uniqueId: Math.random() };
    const updatedTodoList = todoList.concat(todo);
    setTodoList(updatedTodoList);
    saveTodoListToDatabase(updatedTodoList);
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
