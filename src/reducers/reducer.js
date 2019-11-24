import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import taskReducer from "./taskReducer";
import formReducer from "./formReducer";

export const reducer = history =>
  combineReducers({
    router: connectRouter(history),
    taskReducer,
    formReducer
  });

export default reducer;
