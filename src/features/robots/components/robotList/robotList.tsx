import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestRepository from "../../../../app/repositories/RestRepository";
import { RootState } from "../../../../app/store";
import { loadRobotsAction } from "../../reducer/actionCreator";
import RobotCard from "../RobotCard/RobotCard";

const RobotsList = (): JSX.Element => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_LOCAL_API_URL as string;

  const repoRobots = useMemo(() => new RestRepository<Response>(url), [url]);

  const getAllRobots = useCallback(async () => {
    const robots = await repoRobots.getAll();
    dispatch(loadRobotsAction(robots.robots));
  }, [repoRobots, dispatch]);

  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  const robots = useSelector((state: RootState) => state.robots);
  return (
    <>
      <h2 className="robotList__title">Robot List</h2>
      <ul className="robotList__list">
        {robots.map((robot) => (
          <RobotCard key={robot.name} robot={robot} />
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
