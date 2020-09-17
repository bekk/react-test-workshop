import React, { FunctionComponent } from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../domain/Todo";

type TodoListProps = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = (props) => {
  const isEmpty = props.todoList.length === 0;

  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {props.todoList.map((todo) => (
            <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} />
          ))}
        </ul>
      )}
    </>
  );
};
