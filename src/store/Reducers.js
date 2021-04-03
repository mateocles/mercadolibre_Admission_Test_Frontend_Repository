import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerProduct from "../services/Product/ProductReducer";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    product: reducerProduct,
  });

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
