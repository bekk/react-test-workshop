import { getCompletion } from "./../../utils/completion-utils";
import fetchMock from "fetch-mock";

describe("Tests for completion-utils. Mock interactions to the server", () => {
  test("getCompletion() computes completion based on nb of created vs nb of deleted tasks", async () => {
    fetchMock.get(`/stats/created`, JSON.stringify({ value: 100 }));
    fetchMock.get(`/stats/deleted`, JSON.stringify({ value: 50 }));

    const completion = await getCompletion();

    expect(completion).toBe(0.5);
  });
});
