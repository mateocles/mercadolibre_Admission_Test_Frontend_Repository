import { put, takeLatest, all } from "redux-saga/effects";
import { product } from "./ProductActions";
import Api from "../../common/Api/Api";

function* getProduct() {
  const response = yield Api.get(`items?q=query`);
  yield put(product.getProductResponse(response.payload));
}

function* ActionWatcher() {
  yield takeLatest(product.getProduct, getProduct);
}

export default function* ProductSaga() {
  yield all([ActionWatcher()]);
}
