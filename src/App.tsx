import React, { useState } from "react";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  //database.ref(`users/${username}/`).set({ tasks });

  return (
    <>
      <h1>Simple to-do list</h1>
      Add things that you need to do here, and then remove them when you've
      solved them!
      <TaskList tasks={tasks}></TaskList>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
