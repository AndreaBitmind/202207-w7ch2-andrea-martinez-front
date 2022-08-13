import { createReducer } from "@reduxjs/toolkit";
import Robot from "../models/Robot";

const initialState: Array<Robot> = [
  {
    name: "",
    imageURL: "",
    skills: { creationDate: "", endurance: 0, speed: 0 },
  },
];

const robotsReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: Array<Robot>) => [...state]);
});

export default robotsReducer;
