import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import robotsReducer from "../features/robots/reducer/robotsReducer";
import { userReducer } from "../features/users/reducers/usersSlice";

export const store = configureStore({
  reducer: { robots: robotsReducer, users: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
