import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
