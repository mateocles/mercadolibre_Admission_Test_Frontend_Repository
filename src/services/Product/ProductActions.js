import { createActions } from "redux-actions";

export const { product } = createActions({
  PRODUCT: {
    GET_PRODUCT_SEARCH: (payload) => ({ payload }),
    GET_PRODUCT_SEARCH_RESPONSE: (data) => ({ data }),

    GET_DETAIL_PRODUCT: (payload) => ({ payload }),
    GET_DETAIL_PRODUCT_RESPONSE: (data) => ({ data }),
  },
});
