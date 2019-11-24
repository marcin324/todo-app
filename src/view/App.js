import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "../store/configureStore";

import Todo from "./Todo";
import Done from "./Done";
import MainTemplate from "../templates/MainTemplate";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const App = () => {
  const store = configureStore({ history });
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MainTemplate>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/todo" />} />
              <Route path="/todo" component={Todo} />
              <Route path="/done" component={Done} />
            </Switch>
          </MainTemplate>
        </ConnectedRouter>
      </Provider>
    </div>
  );
};

export default App;
