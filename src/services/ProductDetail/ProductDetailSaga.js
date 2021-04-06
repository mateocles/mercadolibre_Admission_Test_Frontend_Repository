import { put, takeLatest, all } from "redux-saga/effects";
import { product } from "./ProductDetailActions";
import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

function* getProductDetail({ payload }) {
  try {
    const response = yield Api.get(`items/${payload.payload}`);
    yield put(product.getProductDetailResponse(response.payload));
  } catch (error) {
    setMessage("Error", "Ha sucedido un error en la transacción", "error");
  }
}

function* ActionWatcher() {
  yield takeLatest(product.getProductDetail, getProductDetail);
}

export default function* ProductDetailSaga() {
  yield all([ActionWatcher()]);
}
