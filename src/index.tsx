import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { SnakeLadder } from "./views/snake-ladder";

const hist = createBrowserHistory();

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <Router history={hist}>
    <Switch>
      <Route path="/snakes-ladder" component={SnakeLadder} />
      <Redirect from="/" to="/snakes-ladder" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
