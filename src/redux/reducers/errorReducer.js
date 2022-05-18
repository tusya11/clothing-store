import { GET_ERROR } from "../types/types";

const initialState = {
  error: {},
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
