import { fork, all } from "redux-saga/effects";
import productSaga from "../services/Product/ProductSaga";
import ProductDetailSaga from "../services/ProductDetail/ProductDetailSaga";

export default function* rootSaga() {
  yield all([fork(productSaga), fork(ProductDetailSaga)]);
}
