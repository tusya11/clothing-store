import { GET_USER, GET_ERROR } from "../types/types";

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user,
  };
}

export function getError(error) {
  return {
    type: GET_ERROR,
    payload: error,
  };
}
