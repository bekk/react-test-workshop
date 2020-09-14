import {
  getRestStatus,
  RestResource,
  RestStatus,
  RestTodolist,
} from "./api-utils";
import { Todo, Todolist } from "../domain/Todo";

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

const fetchTaskslist = async (): Promise<Todolist> => {
  const response = await fetch("/todolist");
  const restStatus: RestStatus = getRestStatus(response.status);

  if (restStatus !== RestStatus.Success) {
    const error = {
      status: restStatus,
    };

    return Promise.reject(error);
  }

  return await response.json();
};

export const fetchTodolistRestResource = async (): Promise<RestTodolist> => {
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
