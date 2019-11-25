import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import cookieSession from "cookie-session";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Router>
        <AuthButton />
        <Switch>
          <Route path="/Login">
            <Signup />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <>
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
      <Dashboard />
    </>
  ) : (
    <>
      <p>You are not logged in.</p>
      <LoginPage />
      <RegisterPage />
    </>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
      // let user = request.session;
    });
  };
  return (
    <Link to="Login">
      <button onClick={login}>Log in</button>
    </Link>
  );
}

function RegisterPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let register = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <Link to="Signup">
      <button>Register</button>
    </Link>
  );
}
