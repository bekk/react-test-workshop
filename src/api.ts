import * as firebase from "firebase";
import { userId } from "./firebase";
import { Todo } from "./components/TodoItem";

export function saveTodoListToDatabase(todoList: Todo[]) {
  return firebase
    .database()
    .ref("users/" + userId)
    .set(todoList);
}

export function fetchTodoListFromDatabase(): Promise<Todo[] | undefined> {
  return firebase
    .database()
    .ref("users/" + userId)
    .once("value")
    .then((snapshot) => {
      return snapshot.val() as Todo[];
    })
    .catch((error) => {
      console.error("Could not fetch data from firestore database: ", error);
      return undefined;
    });
}
