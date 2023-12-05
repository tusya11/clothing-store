import { put, takeEvery } from "redux-saga/effects";
import { mockData } from "../../utils/consts/mockData";
import { mockUsers } from "../../utils/consts/mockUsers";
import { getProducts, getUser, getUsers } from "../actions/indexActions";
import axios from "axios";

export function* workerSagaToRegistration(args) {
  const body = {
    first_name: "Тест",
    middle_name: "Тест",
    second_name: "Тест",
    phone: "+71113241223",
    gender: "male",
    ...args.payload,
  };

  try {
    const res = yield axios.post(
      "http://127.0.0.1:8000/api/auth/registration",
      body
    );
    yield put(getUser(res.data));
  } catch (e) {
    console.error(e);
  }
}

export function* workerSagaToLogin(args) {
  try {
    const res = yield axios.post(
      "http://127.0.0.1:8000/api/auth/login",
      args.payload
    );

    yield put(getUser(res.data));
  } catch (e) {
    console.error(e);
  }
}

export function* workerSagaGetUsers() {
  yield put(getUsers(mockUsers));
  localStorage.setItem("users", JSON.stringify(mockUsers));
}

export function* workerSagaGetProducts() {
  yield put(getProducts(mockData));
}

export function* worderSagaCreateProduct(args) {
  console.log(args);
  const { name, price } = args.payload.product;

  const config = {
    headers: { Authorization: `Bearer ${args.payload.token}` },
  };

  try {
    yield axios.post(
      "http://127.0.0.1:8000/api/products",
      {
        name,
        price,
      },
      config
    );

    // yield put(getUser(res.data));
  } catch (e) {
    console.error(e);
  }
}

export function* watchClickSaga() {
  yield takeEvery("SIGN_UP", workerSagaToRegistration);
  yield takeEvery("GET_PRODUCTS", workerSagaGetProducts);
  yield takeEvery("GET_USERS", workerSagaGetUsers);
  yield takeEvery("LOGIN", workerSagaToLogin);
  yield takeEvery("CREATE_PRODUCT", worderSagaCreateProduct);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
