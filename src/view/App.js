import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Todo from "./Todo";
import Done from "./Done";
import MainTemplate from "../templates/MainTemplate";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/todo_app">
          <MainTemplate>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/todo" />} />
              <Route path="/todo" component={Todo} />
              <Route path="/done" component={Done} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
