import React, { useEffect } from "react";
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

const hasToken = function() {
  return localStorage.getItem("token") ? <Dashboard /> : <Landing />;
};

export default function Application(props) {
  // useEffect(() => {
  //   hasToken();
  // }, [localStorage.getItem("token")]);
  return localStorage.getItem("token") ? <Dashboard /> : <Landing />;
}
