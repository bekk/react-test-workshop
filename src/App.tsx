import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { TasksProvider } from "./providers/TasksContext";
import { TasksList } from "./components/TasksList";
import { Todo, TodoList } from "./components/TodoList";
import { useFetchTodoList, saveTodoListToDatabase } from "./api/api";
import { AddTodo } from "./components/AddTodo";

const App: FunctionComponent = () => {
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
      <TasksProvider>
        <h1>Simple to-do list</h1>
        Add things that you need to do here, and then remove them when you've
        solved them!
        <TodoList todoList={todoList} removeTodo={removeTodo} />
        <AddTodo addTodo={addTodo} />
        <h1>Simple task list</h1>
        <p>
          Task list is exactly the same as Todolist but behaves a bit
          differently in its interactions with backend
        </p>
        <p>
          In order to use mocking with several interactions with the server ....
        </p>
        <ul>
          <li>it uses i Task object</li>
          <li>when app starts it fetches exixting tasks</li>
          <li>
            when user enters a new task it creates a new task in the backend
            with a POST and triggers a new GET + rerender
          </li>
          <li>
            when user deletes a task it sends a DELETE to the backend and
            triggers a new fetch + rerender
          </li>
        </ul>
        <TasksList />
      </TasksProvider>
    </>
  );
};

export default App;
