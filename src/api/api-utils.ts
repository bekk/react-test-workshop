// types and interfaces
import { Todolist } from "../domain/Todo";

export enum RestStatus {
  NotLoadedYet = "NotLoadedYet",
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

export interface NotLoadedYet {
  status: RestStatus.NotLoadedYet;
}

export interface Loading {
  status: RestStatus.Loading;
}

export interface Success<T> {
  status: RestStatus.Success;
  data: T;
}

export interface Error {
  status: RestStatus.Error;
}

export type RestResource<T> = NotLoadedYet | Loading | Success<T> | Error;

export const getRestStatus = (responseStatus: number): RestStatus => {
  switch (responseStatus) {
    case 200: {
      return RestStatus.Success;
    }
    default: {
      return RestStatus.Error;
    }
  }
};

export type RestTodolist = RestResource<Todolist>;
