import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";
import { loadRobotsActionCreator } from "./actionCreator";

const initialState: Array<Robot> = [];

const robotsReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: Array<Robot>) => [...state]);
  builder.addCase(loadRobotsActionCreator, (state, action) => action.payload);
});

export default robotsReducer;
