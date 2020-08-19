import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList, Todo } from "./components/TodoList";
import { useFetchTodoList, saveTodoListToDatabase } from "./api";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { data } = useFetchTodoList();

  const addTodo = (todo: Todo) => {
    const updatedTodoList = todoList.concat(todo);
    setTodoList(updatedTodoList);
    saveTodoListToDatabase(updatedTodoList);
  };

  const removeTodo = (id: number) => {
    const updatedTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(updatedTodoList);
    saveTodoListToDatabase(updatedTodoList);
  };

  useEffect(() => {
    if (data) {
      setTodoList(data.todoList);
    }
  }, [data]);

  return (
    <>
      <h1>Simple to-do list</h1>
      Add things that you need to do here, and then remove them when you've
      solved them!
      <TodoList todoList={todoList} removeTodo={removeTodo} />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default App;
