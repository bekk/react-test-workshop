import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList, Todo } from "./components/TodoList";
import { fetchTodoListFromDatabase } from "./api";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchInitialTodoList() {
      const todoList = await fetchTodoListFromDatabase();
      if (todoList) {
        setTodoList(todoList);
      }
    }
    fetchInitialTodoList();
  }, []);

  return (
    <>
      <h1>Simple to-do list</h1>
      Add things that you need to do here, and then remove them when you've
      solved them!
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
