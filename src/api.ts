import * as firebase from "firebase";
import { userId } from "./firebase";

export function saveTodoListToDatabase(todoList: string[]) {
  return firebase
    .database()
    .ref("users/" + userId)
    .set(todoList);
}

export function fetchTodoListFromDatabase() {
  return firebase
    .database()
    .ref("users/" + userId)
    .once("value")
    .then((snapshot) => {
      return snapshot.val() as string[];
    })
    .catch((error) => {
      console.error("Could not fetch data from firestore database: ", error);
      return undefined;
    });
}
