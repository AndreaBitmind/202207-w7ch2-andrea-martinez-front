import { render, screen } from "@testing-library/react";
import Robot from "../../models/Robot";
import RobotCard from "./RobotCard";

describe("Given a Robot Card component", () => {
  describe("When  is rendered and it receives the robot 'Robotina'", () => {
    test("Then it should show a card with all the data of Robotina", () => {
      const robotina: Robot = {
        creationDate: "",
        endurance: 0,
        imageURL: "",
        name: "",
        speed: 0,
      };

      render(<RobotCard robot={robotina} />);

      const robotName = screen.getByRole("heading", { name: robotina.name });
      const robotImage = screen.getByAltText(robotina.name);

      expect(robotName).toBeInTheDocument();
      expect(robotImage).toBeInTheDocument();
    });
  });
});
