import React from "react";

type TaskListProps = {
  tasks: string[];
};
export function TaskList({ tasks }: TaskListProps) {
  const isEmpty = tasks.length === 0;
  return (
    <>
      <h2>List:</h2>
      {isEmpty ? (
        <p>You've finished all your tasks!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </>
  );
}
