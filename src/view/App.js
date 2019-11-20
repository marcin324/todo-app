import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Todo from "./Todo";
import Done from "./Done";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/todo" />} />
            <Route path="/todo" component={Todo} />
            <Route path="/done" component={Done} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
