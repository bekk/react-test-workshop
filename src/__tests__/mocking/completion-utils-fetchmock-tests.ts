import { getCompletionRate } from "../../utils/completion-utils";
import fetchMock from "fetch-mock";

describe("Tests for getCompletion() function", () => {
  // Oppgave 3a
  test("getCompletionRate() computes completion rate in percent based on nb of created vs nb of deleted todos", async () => {
    // use fetchmock.get() here ...

    const completion = await getCompletionRate();

    expect(completion).toBe(50);
  });

  // Oppgave 3b
});
