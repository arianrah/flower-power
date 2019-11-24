import React from "react";
import axios from "axios";
import Plants from "../plants/Plants";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function dashboard(props) {
  return (
    <>
      <h1>DASHBOARD</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
            </ul>
          </nav>
          <Switch>
            <Route path="/plants">
              <Plants />
            </Route>
            {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}
