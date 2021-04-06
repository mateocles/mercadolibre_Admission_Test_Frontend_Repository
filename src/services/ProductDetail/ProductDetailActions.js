import { createActions } from "redux-actions";

export const { product } = createActions({
  PRODUCT: {
    GET_PRODUCT_DETAIL: (payload) => ({ payload }),
    GET_PRODUCT_DETAIL_RESPONSE: (data) => ({ data }),
  },
});
