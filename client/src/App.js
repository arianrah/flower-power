import React, { useState } from "react";

import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

export default function Application(props) {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token);

  return user ? <Dashboard /> : <Landing setUser={setUser} />;
}
