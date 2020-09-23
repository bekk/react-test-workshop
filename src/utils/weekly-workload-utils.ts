import { getTodaysDate } from "./date-utils";

export const getWeeklyWorloadStatus = (completionRate: number): string => {
  const today = getTodaysDate();

  switch (today) {
    case "Monday":
      return "Are you ready for a new week?";
    default:
      if (completionRate === 100) {
        return "All tasks finished! Well done 😀";
      } else {
        return "Keep on working with your tasks ⏱";
      }
  }
};
