import fetchMock from "fetch-mock";
import { Todo } from "../domain/Todo";

let delayfactor = 0.2;

fetchMock.get(
  "express:/todolist",
  (url) => {
    return {
      todoList: [{ text: "Hello I'm MOCK", id: 1 }],
    };
  },
  {
    delay: 1000 * delayfactor,
  }
);
