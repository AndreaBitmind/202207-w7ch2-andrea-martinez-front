import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/User";

const usersInitialState: User = { id: "", userName: "", token: "" };

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<User>) => action.payload,
    logoutUser: (previousUSer) => usersInitialState,
  },
});

export const userReducer = usersSlice.reducer;

export const {
  loginUser: loadUsersActionCreator,
  logoutUser: addUserActionCreator,
} = usersSlice.actions;
