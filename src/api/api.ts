import { Todo } from "../components/TodoList";
import {
  getRestStatus,
  RestResource,
  RestStatus,
  RestTaskList,
} from "./api-utils";
import { Taskslist } from "../domain/Task";
import useSWR from "swr/esm/use-swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useFetchTodoList() {
  return useSWR<TodoListResponse>("/todolist", fetcher);
  /*return {
    todoList: [
      {
        text: "A dummy todo",
        id: 777
      }
    ]
  };*/
}

export function saveTodoListToDatabase(todoList: Todo[]) {
  fetch("/todolist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todoList: todoList }),
  });
}

type TodoListResponse = {
  todoList: Todo[];
};

export interface Statistic {
  value: number;
}

export type RestStatistic = RestResource<Statistic>;

export const fetchNbOfCreatedTasks = async (): Promise<RestStatistic> => {
  const response = await fetch("/stats/created", {
    method: "GET",
  });

  const restStatus = getRestStatus(response.status);
  if (restStatus === RestStatus.Success) {
    return {
      status: RestStatus.Success,
      data: await response.json().then((data) => {
        return data;
      }),
    };
  }
  return {
    status: restStatus,
  };
};

export const fetchNbOfDeletedTasks = async (): Promise<RestStatistic> => {
  const response = await fetch("/stats/deleted", {
    method: "GET",
  });

  const restStatus = getRestStatus(response.status);
  if (restStatus === RestStatus.Success) {
    return {
      status: RestStatus.Success,
      data: await response.json().then((data) => {
        return data;
      }),
    };
  }
  return {
    status: restStatus,
  };
};

/*
export const fetchTasks = async (): Promise<RestResource<Taskslist>> => {
  const response = await fetch("/taskslist", {
    method: 'GET'
  });

  const restStatus = getRestStatus(response.status);

  if (restStatus === RestStatus.Success) {
    return {
      status: RestStatus.Success,
      data: await response.json().then((data) => {
        return data;
      }),
    };
  }
  return {
    status: restStatus,
  };
};
*/

const fetchTaskslist = async (): Promise<Taskslist> => {
  const response = await fetch("/taskslist");
  const restStatus: RestStatus = getRestStatus(response.status);

  if (restStatus !== RestStatus.Success) {
    const error = {
      status: restStatus,
    };

    return Promise.reject(error);
  }

  return await response.json();
};

export const fetchTaskListRestResource = async (): Promise<RestTaskList> => {
  try {
    const taskslist = await fetchTaskslist();

    const restTasksList = {
      status: RestStatus.Success,
      data: taskslist,
    };
    return restTasksList;
  } catch (error) {
    return { status: RestStatus.Error };
  }
};
