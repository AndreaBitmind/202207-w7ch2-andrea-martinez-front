import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";

const initialState: Array<Robot> = [];

const robotsReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: Array<Robot>) => [...state]);
});

export default robotsReducer;
