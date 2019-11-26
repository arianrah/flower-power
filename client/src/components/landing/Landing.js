import React, { Fragment } from "react";
import Dashboard from "../dashboard/Dashboard";
import styled from "styled-components";
import Signup from "./Signup";
import Login from "./Login";

//import cookieSession from "cookie-session";
import landing_image from "./landing.jpg";
import cell_image from "./landing_cell.jpg";
import useVisualMode from "../../hooks/useVisualMode";
import Leading from "./Leading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const LEADING = "LEADING";
const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

const Bg = styled.div`
  background-image: url(${landing_image});
  min-height: 100vh;
  max-width: 100vw;
  background-position: center top;
  backgroud-size: contain;
  background-attachment: fixed;

  @media screen and (max-width: 500px) {
    background-image: url(${cell_image});
  }
`;

export default function Landing(props) {
  const { mode, transition, back } = useVisualMode(LEADING);

  function login() {
    transition(LOGIN);
  }
  function signup() {
    transition(SIGNUP);
  }

  return (
    <Fragment>
      <Bg>
        {mode === LEADING && <Leading onLogin={login} onSignup={signup} />}
        {mode === LOGIN && <Login />}
        {mode === SIGNUP && <Signup />}
      </Bg>
    </Fragment>
  );
}
