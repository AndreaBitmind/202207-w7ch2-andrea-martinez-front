import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";
import { loadRobotsAction } from "./actionCreator";

const initialState: Array<Robot> = [];

const robotsReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadRobotsAction, (state, action) => action.payload);
  builder.addDefaultCase((state: Array<Robot>) => [...state]);
});

export default robotsReducer;
