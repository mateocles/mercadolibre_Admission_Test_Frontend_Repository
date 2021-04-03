import { fork, all } from "redux-saga/effects";
import productSaga from "../services/Product/ProductSaga";

export default function* rootSaga() {
  yield all([
    fork(productSaga)
  ]);
}
