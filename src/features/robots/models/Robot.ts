interface Robot {
  name: string;
  imageURL: string;
  skills: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export default Robot;
