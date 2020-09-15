import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { RestStatus, RestTodolist } from "../api/api-utils";
import {
  createTodoRestResource,
  deleteTodoRestResource,
  fetchTodolistRestResource,
} from "../api/api";
import { Todo } from "../domain/Todo";

/*export const todolistContext = createContext<{RestTodolist, (todo: Todo) => void, (id: number) => void}>({
  status: RestStatus.NotLoadedYet,
});*/
export type TodolistContextType = {
  restTodolist: RestTodolist;
  addTodo: (value: Todo) => void;
  deleteTodo: (value: number) => void;
};

export const todolistContext = createContext<TodolistContextType>({
  restTodolist: { status: RestStatus.NotLoadedYet },
  addTodo: (value: Todo) => {},
  deleteTodo: (value: number) => {},
});

export const TasksProvider: FunctionComponent = (props) => {
  // State for todos
  const [restTodolist, setRestTodolist] = useState<RestTodolist>({
    status: RestStatus.Loading,
  });

  // add a Todo (and update DB)
  const addTodo = (todo: Todo): void => {
    createTodoRestResource(todo).then((todolist) => {
      setRestTodolist(todolist);
    });
  };

  // delete a Todo (and update DB)
  const deleteTodo = (id: number) => {
    deleteTodoRestResource(id).then((todolist) => {
      setRestTodolist(todolist);
    });
  };

  useEffect(() => {
    fetchTodolistRestResource().then((todolist) => {
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
