import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  department: [],
  loading: false,
  message: undefined,
  error: false,
};

const reducerMenu = handleActions(
  {
    MENU: {
      GET_MENU_RESPONSE: {
        next(state, { payload: { data } }) {
          return { ...state, loading: false, data: data };
        },
        throw(state, { error, payload: { message } }) {
          return { ...state, error, message };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducerMenu;
