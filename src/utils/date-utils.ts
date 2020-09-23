export const getTodaysDate = (): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todaysDate = new Date();

  return days[todaysDate.getDay()];
};
