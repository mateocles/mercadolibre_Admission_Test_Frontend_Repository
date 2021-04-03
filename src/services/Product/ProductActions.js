import { createActions } from "redux-actions";

export const { product } = createActions({
  PRODUCT: {
    GET_PRODUCT: () => ({}),
    GET_PRODUCT_RESPONSE: (data) => ({ data }),
  },
});
