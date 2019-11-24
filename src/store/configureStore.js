// import { createBrowserHistory } from "history";
import { applyMiddleware, /* compose, */ createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducer";

const initialState = {
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

// export const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL
// });

export default function configureStore({ history }) {
  const composeEnhancer = composeWithDevTools({});
  const store = createStore(
    reducer(history), // root reducer with router state
    initialState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}
