import { put, takeEvery } from "redux-saga/effects";
import { mockData } from "../../utils/consts/mockData";
import { getProducts } from "../actions/indexActions";

// GET_ME
export function* workerSagaToRegistration() {}

export function* workerSagaGetProducts() {
  yield put(getProducts(mockData));
}

export function* watchClickSaga() {
  yield takeEvery("SIGN_UP", workerSagaToRegistration);
  yield takeEvery("GET_PRODUCTS", workerSagaGetProducts);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
