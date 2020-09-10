import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { RestStatus, RestTaskList } from "../api/api-utils";
import { fetchTaskListRestResource } from "../api/api";

export const tasksContext = createContext<RestTaskList>({
  status: RestStatus.NotLoadedYet,
});

export const TasksProvider: FunctionComponent = (props) => {
  const [restTasklist, setRestTasklist] = useState<RestTaskList>({
    status: RestStatus.Loading,
  });

  useEffect(() => {
    fetchTaskListRestResource().then((taskslist) => {
      setRestTasklist(taskslist);
    });
  }, []);

  const Provider = tasksContext.Provider;
  return <Provider value={restTasklist}>{props.children}</Provider>;
};
