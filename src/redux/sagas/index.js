import { takeEvery } from "redux-saga/effects";

// GET_ME
export function* workerSagaToRegistration() {}

export function* watchClickSaga() {
  yield takeEvery("SIGN_UP", workerSagaToRegistration);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
