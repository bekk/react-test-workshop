import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { RestStatus, RestTodolist } from "../api/api-utils";
import { fetchTodolistRestResource } from "../api/api";

export const todolistContext = createContext<RestTodolist>({
  status: RestStatus.NotLoadedYet,
});

export const TasksProvider: FunctionComponent = (props) => {
  const [restTodolist, setRestTodolist] = useState<RestTodolist>({
    status: RestStatus.Loading,
  });

  useEffect(() => {
    fetchTodolistRestResource().then((todolist) => {
      setRestTodolist(todolist);
    });
  }, []);

  const Provider = todolistContext.Provider;
  return <Provider value={restTodolist}>{props.children}</Provider>;
};
