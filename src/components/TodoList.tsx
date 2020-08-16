import React from "react";

type TodoListProps = {
  todoList: string[];
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
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </>
  );
}
