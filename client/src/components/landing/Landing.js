import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
