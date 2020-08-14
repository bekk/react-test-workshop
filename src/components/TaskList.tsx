import React from "react";

type TaskListProps = {
  tasks: string[];
};
export function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      <h2>List:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}
