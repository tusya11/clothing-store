import { put, takeEvery } from "redux-saga/effects";
import { mockData } from "../../utils/consts/mockData";
import { mockUsers } from "../../utils/consts/mockUsers";
import { getProducts, getUsers } from "../actions/indexActions";

// GET_ME
export function* workerSagaToRegistration() {}

export function* workerSagaGetProducts() {
  yield put(getProducts(mockData));
}

export function* workerSagaGetUsers() {
  yield put(getUsers(mockUsers));
  localStorage.setItem("users", JSON.stringify(mockUsers));
}

export function* watchClickSaga() {
  yield takeEvery("SIGN_UP", workerSagaToRegistration);
  yield takeEvery("GET_PRODUCTS", workerSagaGetProducts);
  yield takeEvery("GET_USERS", workerSagaGetUsers);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
