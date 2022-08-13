import { createAction } from "@reduxjs/toolkit";
import Robot from "../models/Robot";
import actionTypes from "./actionTypes";

const loadRobots = createAction<Array<Robot>>(actionTypes.loadRobots);
