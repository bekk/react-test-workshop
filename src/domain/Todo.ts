// TODO
//  rename use Task instead of Todo

export type Todo = {
  text: string;
  id: number;
};

export type Todolist = {
  todoList: Todo[];
};
