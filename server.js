const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let todoList = {
  todoList: [],
};

let nbOfItemsInPreviousUpdate = 0;
let totalItemsCreated = 0;
let totalItemsDeleted = 0;

app.get("/todolist", function (req, res) {
  return res.send(todoList);
});

app.post("/todolist", function (request, response) {
  todoList = request.body;

  if ( todoList.todoList.length > nbOfItemsInPreviousUpdate) {
    totalItemsCreated++;
  } else {
    totalItemsDeleted++;
  }

  nbOfItemsInPreviousUpdate = todoList.todoList.length;
  response.send();
});


// Stats
app.get("/stats/created", function (req, res) {
  return res.json({value: `${totalItemsCreated}`});
});

app.get("/stats/deleted", function (req, res) {
  return res.json({value: `${totalItemsDeleted}`});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening on port ${port}!`));
