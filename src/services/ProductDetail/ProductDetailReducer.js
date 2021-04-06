import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  item: [],
  author: [],
  loading: { getProductDetail: false },
  message: undefined,
  error: { getProductDetail: undefined },
  success: { getProductDetail: undefined },
};

const reducerProductDetail = handleActions(
  {
    PRODUCT: {
      GET_PRODUCT_DETAIL: (state) => ({
        ...state,
        loading: { ...state.loading, getProductDetail: true },
        error: { ...state.error, getProductDetail: false },
        success: { ...state.success, getProductDetail: false },
        author: [],
        item: [],
      }),
      GET_PRODUCT_DETAIL_RESPONSE: {
        next(state, { payload: { data } }) {
          return {
            ...state,
            loading: { ...state.loading, getProductDetail: false },
            error: { ...state.error, getProductDetail: false },
            success: { ...state.success, getProductDetail: true },
            author: data.author,
            item: data.item,
          };
        },
        throw(state, { error, payload: { message } }) {
          return {
            ...state,
            loading: { ...state.loading, getProductDetail: false },
            error: { ...state.error, getProductDetail: true },
            success: { ...state.success, getProductDetail: false },
            message,
          };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducerProductDetail;
