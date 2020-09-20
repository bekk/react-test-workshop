export const getTodaysDate = (lang: string): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dager = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];

  const todaysDate = new Date();

  return lang === "nb" ? dager[todaysDate.getDay()] : days[todaysDate.getDay()];
};
