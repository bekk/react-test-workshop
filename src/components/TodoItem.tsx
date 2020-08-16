import React from "react";

export type Todo = {
  text: string;
  uniqueId: number;
};

export function TodoItem({ text }: Todo) {
  return <li>{text}</li>;
}
