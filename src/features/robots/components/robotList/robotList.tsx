import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepository from "../../../../app/repositories/RestRepository";
import { RootState } from "../../../../app/store";
import { loadRobotsAction } from "../../reducer/actionCreator";

const RobotsList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);

  const dispatch = useDispatch();
  const url = "http://localhost:4000/robots";

  const repoRobots = useMemo(() => new RestRepository<Response>(url), []);

  useEffect(() => {
    repoRobots.getAll().then((robots) => dispatch(loadRobotsAction(robots)));
  }, [dispatch, repoRobots]);

  return (
    <>
      <h2 className="robotList__title">Robot List</h2>
      <ul className="robotList__list">
        {robots.map((robot) => (
          <div>{robot.name}</div>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
