import React from "react";
import { TodoItem, Todo } from "./TodoItem";

type TodoListProps = {
  todoList: Todo[];
};
export function TodoList({ todoList }: TodoListProps) {
  const isEmpty = todoList.length === 0;
  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              text={todo.text}
              uniqueId={todo.uniqueId}
              key={todo.uniqueId}
            />
          ))}
        </ul>
      )}
    </>
  );
}
