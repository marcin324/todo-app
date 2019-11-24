import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducer";
// import { initialState } from "../reducers/taskReducer";

export const initialState = {
  todo: [
    {
      id: 0,
      title: `Zdobyć pierwszą pracę jako frontend developer`,
      deadline: `2020-01-01`,
      important: true,
      finishDate: null
    }
  ],
  done: []
};

export default function configureStore({ history }) {
  const composeEnhancer = composeWithDevTools({});
  const store = createStore(
    reducer(history),
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
