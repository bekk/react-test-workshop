import {
  fetchNbOfCreatedTasks,
  fetchNbOfDeletedTasks,
  RestStatistic,
} from "../api/api";
import { RestStatus } from "../api/api-utils";

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
