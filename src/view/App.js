import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
import configureStore /* , { history }  */ from "../store/configureStore";
// import store from "../store/store";

import Todo from "./Todo";
import Done from "./Done";
import MainTemplate from "../templates/MainTemplate";

export const history = createBrowserHistory();

// const store = configureStore({ history });

const App = () => {
  const store = configureStore({ history });
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter history={history} basename="/todo_app">
          <MainTemplate>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/todo" />} />
              <Route path="/todo" component={Todo} />
              <Route path="/done" component={Done} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
