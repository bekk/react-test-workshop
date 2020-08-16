import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { fetchTodoListFromDatabase, saveTodoListToDatabase } from "./api";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  useEffect(() => {
    async function fetchInitialTodoList() {
      const todoList = await fetchTodoListFromDatabase();
      if (todoList) {
        setTodoList(todoList);
      }
    }
    fetchInitialTodoList();
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      saveTodoListToDatabase(todoList);
    }
  }, [todoList]);

  return (
    <>
      <h1>Simple to-do list</h1>
      Add things that you need to do here, and then remove them when you've
      solved them!
      <TodoList todoList={todoList}></TodoList>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
