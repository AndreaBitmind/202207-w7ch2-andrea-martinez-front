import Robot from "../../models/Robot";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <div className="card-container">
      <div className="card-container__robotCard">
        <h3>{robot.name}</h3>
        <img src={robot.imageURL} alt={robot.name} height={400} />
        <ul className="robotCard-data">
          <li>Speed: {robot.speed}</li>
          <li>Endurance: {robot.endurance}</li>
          <li>CreationDate: {robot.creationDate}</li>
        </ul>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default RobotCard;
