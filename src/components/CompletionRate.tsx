import { Todolist } from "domain/Todo";
import React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { getCompletionRate } from "utils/completion-utils";
import { getWeeklyWorloadStatus } from "utils/weekly-workload-utils";

type CompletionRateProps = {
  todoList: Todolist;
};

const CompletionRate: FunctionComponent<CompletionRateProps> = (todoList) => {
  const [completionRate, setCompletionRate] = useState<number>();
  const [weeklyWorkloadStatus, setWeeklyWorkloadStatus] = useState<string>();

  useEffect(() => {
    getCompletionRate().then((value) => {
      setCompletionRate(value);
      setWeeklyWorkloadStatus(getWeeklyWorloadStatus(value));
    });
  }, [todoList]);

  return (
    <>
      <h2>Progress measurement</h2>
      <p>Your completion rate: {completionRate} %</p>
      <p>Workload status this week: {weeklyWorkloadStatus}</p>
    </>
  );
};

export default CompletionRate;
