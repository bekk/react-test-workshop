import { getMasteryLevel } from "../../utils/completion-utils";

jest.mock("../../utils/date-utils", () => {
  return {
    today: jest.fn(() => "Monday"),
  };
});

test("getMasteryLevel() uses today's date", async () => {
  const masteryLevel = getMasteryLevel(5);
  expect(masteryLevel).toBe("Monday Noob");
});
