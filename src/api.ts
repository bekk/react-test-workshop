import { Todo } from "./components/TodoList";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function saveTodoListToDatabase(todoList: Todo[]) {
  fetch("/todolist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todoList: todoList }),
  });
}

type TodoListResponse = {
  todoList: Todo[];
};

export function useFetchTodoList() {
  return useSWR<TodoListResponse>("/todolist", fetcher);
}
