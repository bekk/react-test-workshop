const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todoList = {
  todoList: [],
};

app.get("/todolist", function (req, res) {
  return res.send(todoList);
});

app.post("/todolist", function (request, response) {
  todoList = request.body;
  console.log(request.body); // your JSON
  response.send(request.body); // echo the result back
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening on port ${port}!`));
