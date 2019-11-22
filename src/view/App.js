import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Todo from "./Todo";
import Done from "./Done";
import MainTemplate from "../templates/MainTemplate";

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/todo" />} />
            <Route path="/todo" component={() => Todo} />
            <Route path="/done" component={Done} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </div>
  );
};

export default App;
