import React from "react";
import { TodoItem } from "./TodoItem";

export type Todo = {
  text: string;
  id: number;
};

type TodoListProps = {
  todoList: Todo[];
  removeTodo: (id: number) => void;
};
export function TodoList({ todoList, removeTodo }: TodoListProps) {
  const isEmpty = todoList.length === 0;

  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
}
