import { useState } from "react";
import React from "react";

type AddTaskProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

export function AddTask({ tasks, setTasks }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    setTasks(tasks.concat(newTask));
    setNewTask("");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
