import React from "react";
import { TodoItem } from "./TodoItem";
import { saveTodoListToDatabase } from "../api";

export type Todo = {
  text: string;
  uniqueId: number;
};

type TodoListProps = {
  todoList: Todo[];
  setTodoList: (todoList: Todo[]) => void;
};
export function TodoList({ todoList, setTodoList }: TodoListProps) {
  const isEmpty = todoList.length === 0;

  function deleteItem(uniqueId: number) {
    const updatedList = todoList.filter(
      (todoItem) => todoItem.uniqueId !== uniqueId
    );
    setTodoList(updatedList);
    saveTodoListToDatabase(updatedList);
  }

  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem todo={todo} deleteItem={deleteItem} key={todo.uniqueId} />
          ))}
        </ul>
      )}
    </>
  );
}
