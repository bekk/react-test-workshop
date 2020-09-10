import fetchMock from "fetch-mock";

const mock = {
  taskslist: true,
};

let delayfaktor = 1;

fetchMock.get(
  "express:/taskslist",
  (url) => {
    return {
      tasks: [{ text: "Hello I'm MOCK", id: "9876543210" }],
    };
  },
  {
    delay: 1000 * delayfaktor,
  }
);
