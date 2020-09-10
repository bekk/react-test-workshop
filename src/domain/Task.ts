// TODO
//  rename use Task instead of Todo

export type Task = {
  text: string;
  id: number;
};

export type Taskslist = {
  tasks: Task[];
};
