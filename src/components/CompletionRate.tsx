import { Todolist } from "domain/Todo";
import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { getCompletionRate } from "utils/completion-utils";
import { getMasteryLevel } from "utils/mastery-level-utils";

type CompletionRateProps = {
  todoList: Todolist;
};

const CompletionRate: FunctionComponent<CompletionRateProps> = (todoList) => {
  const [completionRate, setCompletionRate] = useState<number>();
  const [masteryLevel, setMasteryLevel] = useState<string>();

  useEffect(() => {
    getCompletionRate().then((value) => {
      setCompletionRate(value);
      setMasteryLevel(getMasteryLevel(value, "en"));
    });
  }, [todoList]);

  return (
    <>
      <h2>How good are you at finishing those tasks?</h2>
      <p>Your completion rate: {completionRate} %</p>
      <p>
        Your (not so true) level of "Simple to-do list" mastery: {masteryLevel}
      </p>
    </>
  );
};

export default CompletionRate;
