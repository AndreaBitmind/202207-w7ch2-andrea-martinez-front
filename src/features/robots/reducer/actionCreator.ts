import { createAction } from "@reduxjs/toolkit";
import Robot from "../models/Robot";
import actionTypes from "./actionTypes";

export const loadRobotsAction = createAction<Array<Robot>>(
  actionTypes.loadRobots
);
