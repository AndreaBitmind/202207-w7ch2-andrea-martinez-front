import Robot from "../models/Robot";
import robotsReducer from "./robotsReducer";

describe("Given the robots reducer", () => {
  describe("When called with an array and an action", () => {
    test("When called with an unknown action it should return the same array", () => {
      const initialState: Array<Robot> = [];
      const unknownAction = { type: "" };

      const result = robotsReducer(initialState, unknownAction);

      expect(result).toStrictEqual(initialState);
    });
  });
});
