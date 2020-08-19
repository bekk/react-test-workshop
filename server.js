const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let todoList = {
  todoList: [],
};

app.get("/todolist", function (req, res) {
  return res.send(todoList);
});

app.post("/todolist", function (request, response) {
  todoList = request.body;
  response.send();
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening on port ${port}!`));
