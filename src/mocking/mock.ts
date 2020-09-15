import fetchMock from "fetch-mock";

let delayfaktor = 1;

fetchMock.get(
  "express:/todolist",
  (url) => {
    return {
      todoList: [{ text: "Hello I'm MOCK", id: "9876543210" }],
    };
  },
  {
    delay: 1000 * delayfaktor,
  }
);
