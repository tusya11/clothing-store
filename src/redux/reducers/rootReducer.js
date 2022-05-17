import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { userReducer } from "../reducers/userReducer";

export const rootReducer = combineReducers(
  {
    user: userReducer,
  },
  applyMiddleware(logger)
);
