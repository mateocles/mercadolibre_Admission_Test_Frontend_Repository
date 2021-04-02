import { createActions } from "redux-actions";

export const { menu } = createActions({
  MENU: {
    GET_MENU: () => ({}),
    GET_MENU_RESPONSE: (data) => ({ data }),
  },
});
