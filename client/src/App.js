import React from "react";
import axios from "axios";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Plants from "./components/plants/Plants";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Application(props) {
  return <Landing />;
}
