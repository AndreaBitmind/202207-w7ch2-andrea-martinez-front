import Robot from "../models/Robot";
import { loadRobotsAction } from "./actionCreator";
import robotsReducer from "./robotsReducer";

describe("Given the robots reducer", () => {
  describe("When called with an empty array as previus state", () => {
    const previusState: Array<Robot> = [];

    test("Then when it's called with an unknown action, it should return the same array", () => {
      const unknownAction = { type: "" };

      const result = robotsReducer(previusState, unknownAction);

      expect(result).toStrictEqual(previusState);
    });

    test("And then when it's called with a load robots action, it should return a new array of robots", () => {
      const newRobots: Robot[] = [
        {
          imageURL: "",
          name: "",
          creationDate: "",
          endurance: 0,
          speed: 0,
        },
      ];
      const action = loadRobotsAction(newRobots);

      const result = robotsReducer(previusState, action);

      expect(result).toStrictEqual(newRobots);
    });
  });
});
