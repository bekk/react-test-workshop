import {
  fetchNbOfCreatedTasks,
  fetchNbOfDeletedTasks,
  RestStatistic,
} from "../api/api";
import { RestStatus } from "../api/api-utils";
import { today } from "./date-utils";

export const getCompletion = async (): Promise<number> => {
  const restStatisticNbOfCreatedTasks: RestStatistic = await fetchNbOfCreatedTasks();
  const restStatisticNbOfDeletedTasks: RestStatistic = await fetchNbOfDeletedTasks();

  if (
    restStatisticNbOfCreatedTasks.status === RestStatus.Success &&
    restStatisticNbOfDeletedTasks.status === RestStatus.Success
  ) {
    return (
      restStatisticNbOfDeletedTasks.data.value /
      restStatisticNbOfCreatedTasks.data.value
    );
  } else {
    return 0;
  }
};

export const getMasteryLevel = (completionRate: number): string => {
  // TODO: algorithm based on todays date
  console.log("day: " + today());
  return `${today()} Noob`;
};
