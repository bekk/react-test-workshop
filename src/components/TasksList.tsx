import React, { FunctionComponent, useContext, useState } from "react";
import { TodoItem } from "./TodoItem";
import { RestStatus, RestTaskList } from "../api/api-utils";
import { tasksContext } from "../providers/TasksContext";

export type Todo = {
  text: string;
  id: number;
};

export const TasksList: FunctionComponent = () => {
  const restTasksList = useContext<RestTaskList>(tasksContext);

  const tasks =
    restTasksList.status === RestStatus.Success ? restTasksList.data.tasks : [];
  const isEmpty = tasks.length === 0;

  return (
    <>
      <h2>List of tasks:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TodoItem todo={task} removeTodo={() => {}} key={task.id} />
          ))}
        </ul>
      )}
    </>
  );
};
