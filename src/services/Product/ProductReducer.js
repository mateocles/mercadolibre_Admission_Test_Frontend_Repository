import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  products: {},
  loading: false,
  message: undefined,
  error: false,
};

const reducerProduct = handleActions(
  {
    PRODUCT: {
      GET_PRODUCT_RESPONSE: {
        next(state, { payload: { data } }) {
          return { ...state, loading: false, products: data };
        },
        throw(state, { error, payload: { message } }) {
          return { ...state, error, message };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducerProduct;
