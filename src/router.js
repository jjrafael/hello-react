import React from "react";
import { Router, Route, IndexRoute, IndexRedirect } from "react-router";
import { history } from "./store.js";
import Lobby from "./containers/Lobby/";
import Login from "./containers/Login";

const router = (
  <div className="app-phoenix">
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/login" component={Login}/>
    </Router>
  </div>
);

// export
export { router };