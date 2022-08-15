import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepository from "../../../../app/repositories/RestRepository";
import { RootState } from "../../../../app/store";
import { loadRobotsAction } from "../../reducer/actionCreator";

const RobotsList = (): JSX.Element => {
  const robots = useSelector((state: RootState) => state.robots);

  const dispatch = useDispatch();
  const url = process.env.REACT_APP_LOCAL_API_URL as string;

  const repoRobots = useMemo(() => new RestRepository<Response>(url), [url]);

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
