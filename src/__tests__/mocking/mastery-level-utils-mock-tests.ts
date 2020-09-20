import { getMasteryLevel } from "../../utils/mastery-level-utils";

// Her skal du beskrive hvilken funksjon (og i hvilken modul) du vil mocke og hva den funksjonen skal returnere

test("getMasteryLevel() uses today's date and returns mastery level based on this date", async () => {
  const masteryLevel = getMasteryLevel(5, "en");
  expect(masteryLevel).toBe("Monday -- Implement Me!");
});
