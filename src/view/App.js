import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import Todo from "./Todo";
import Done from "./Done";
import MainTemplate from "../templates/MainTemplate";

const App = () => {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/todo" />} />
            <Route path="/todo" component={Todo} />
            <Route path="/done" component={Done} />
          </Switch>
        </MainTemplate>
      </HashRouter>
    </div>
  );
};

export default App;
