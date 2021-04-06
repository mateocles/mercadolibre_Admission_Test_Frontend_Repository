import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  items: [],
  categories: [],
  author: [],
  loading: { getProduct: false },
  message: undefined,
  error: { getProduct: undefined },
  success: { getProduct: undefined },
};

const reducerProduct = handleActions(
  {
    PRODUCT: {
      GET_PRODUCT_SEARCH: (state) => ({
        ...state,
        loading: { ...state.loading, getProduct: true },
        error: { ...state.error, getProduct: false },
        success: { ...state.success, getProduct: false },
        author: [],
        categories: [],
        items: [],
      }),
      GET_PRODUCT_SEARCH_RESPONSE: {
        next(state, { payload: { data } }) {
          return {
            ...state,
            loading: { ...state.loading, getProduct: false },
            error: { ...state.error, getProduct: false },
            success: { ...state.success, getProduct: true },
            author: data.author,
            categories: data.categories,
            items: data.items,
          };
        },
        throw(state, { error, payload: { message } }) {
          return {
            ...state,
            loading: { ...state.loading, getProduct: false },
            error: { ...state.error, getProduct: true },
            success: { ...state.success, getProduct: false },
            message,
          };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducerProduct;
