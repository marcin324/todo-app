import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import formReducer from "./formReducer";

export const reducer = combineReducers({
  taskReducer,
  formReducer
});

export default reducer;
