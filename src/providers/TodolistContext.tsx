import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { RestStatus, RestTodolist } from "../api/api-utils";
import {
  createTodoAndReturnUpdatedTodolist,
  deleteTodoAndReturnUpdatedTodolist,
  fetchTodolist,
} from "../api/api";
import { Todo } from "../domain/Todo";

export type TodolistContextType = {
  restTodolist: RestTodolist;
  addTodo: (value: Todo) => void;
  deleteTodo: (value: number) => void;
};

export const todolistContext = createContext<TodolistContextType>({
  restTodolist: { status: RestStatus.NotLoadedYet },
  addTodo: () => {},
  deleteTodo: () => {},
});

export const TasksProvider: FunctionComponent = (props) => {
  const [restTodolist, setRestTodolist] = useState<RestTodolist>({
    status: RestStatus.Loading,
  });

  const addTodo = (todo: Todo): void => {
    createTodoAndReturnUpdatedTodolist(todo).then((todolist) => {
      setRestTodolist(todolist);
    });
  };

  const deleteTodo = (id: number) => {
    deleteTodoAndReturnUpdatedTodolist(id).then((todolist) => {
      setRestTodolist(todolist);
    });
  };

  useEffect(() => {
    fetchTodolist().then((todolist) => {
      setRestTodolist(todolist);
    });
  }, []);

  const Provider = todolistContext.Provider;
  return (
    <Provider value={{ restTodolist, addTodo, deleteTodo }}>
      {props.children}
    </Provider>
  );
};
