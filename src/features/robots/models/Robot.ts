interface Robot {
  name: string;
  imageURL: string;
  speed: number;
  endurance: number;
  creationDate: string;
}

export interface FetchedRobot {
  robots: Robot[];
}

export default Robot;
