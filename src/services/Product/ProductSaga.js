import { put, takeLatest, all } from "redux-saga/effects";
import { product } from "./ProductActions";
import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

function* getProductSearch({ payload }) {
  try {
    const response = yield Api.get(`items?q=${payload.payload}`);
    yield put(product.getProductSearchResponse(response.payload));
  } catch (error) {
    setMessage("Error", "Ha sucedido un error en la transacción", "error");
  }
}

function* ActionWatcher() {
  yield takeLatest(product.getProductSearch, getProductSearch);
}

export default function* ProductSaga() {
  yield all([ActionWatcher()]);
}
