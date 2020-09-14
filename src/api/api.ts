import {
  getRestStatus,
  RestResource,
  RestStatus,
  RestTodolist,
} from "./api-utils";
import { Todo, Todolist } from "../domain/Todo";

// Deprecated
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

/*
  CRUD todolist
 */
export const createTodoRestResource = async (
  todo: Todo
): Promise<RestTodolist> => {
  try {
    const todolist = await createTodo(todo);

    const restTodoList = {
      status: RestStatus.Success,
      data: todolist,
    };
    return restTodoList;
  } catch (error) {
    return { status: RestStatus.Error };
  }
};

const createTodo = async (todo: Todo): Promise<Todolist> => {
  const response = await fetch("/create/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo }),
  });

  const restStatus: RestStatus = getRestStatus(response.status);

  if (restStatus !== RestStatus.Success) {
    const error = {
      status: restStatus,
    };

    return Promise.reject(error);
  }

  return await response.json();
};

const fetchTodolist = async (): Promise<Todolist> => {
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
    const todolist = await fetchTodolist();

    const restTodoList = {
      status: RestStatus.Success,
      data: todolist,
    };
    return restTodoList;
  } catch (error) {
    return { status: RestStatus.Error };
  }
};

const deleteTodo = async (id: number): Promise<Todolist> => {
  const response = await fetch("/delete/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  const restStatus: RestStatus = getRestStatus(response.status);

  if (restStatus !== RestStatus.Success) {
    const error = {
      status: restStatus,
    };

    return Promise.reject(error);
  }

  return await response.json();
};

export const deleteTodoRestResource = async (
  id: number
): Promise<RestTodolist> => {
  try {
    const todolist = await deleteTodo(id);

    const restTodoList = {
      status: RestStatus.Success,
      data: todolist,
    };
    return restTodoList;
  } catch (error) {
    return { status: RestStatus.Error };
  }
};

/*
   Statistics
 */

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
