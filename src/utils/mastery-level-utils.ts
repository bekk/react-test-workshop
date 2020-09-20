import { getTodaysDate } from "./date-utils";

export const getMasteryLevel = (
  completionRate: number,
  lang: string
): string => {
  return `${getTodaysDate(lang)} -- Implement Me!`;
};
