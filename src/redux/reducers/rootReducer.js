import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { userReducer } from "../reducers/userReducer";
import { errorReducer } from "../reducers/errorReducer";

export const rootReducer = combineReducers(
  {
    user: userReducer,
    error: errorReducer,
  },
  applyMiddleware(logger)
);
