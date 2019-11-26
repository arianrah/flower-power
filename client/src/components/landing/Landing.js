import React from "react";
import Dashboard from "../dashboard/Dashboard";
import styled from "styled-components";
import Signup from "./Signup";
import Login from "./Login";
//import cookieSession from "cookie-session";
import landing_image from "./landing.jpg";
import cell_image from "./landing_cell.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  padding: 8px
  width: 150px
  color: #ffffff;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 75vh;
`;

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

export default function Landing() {
  return (
    <>
      <Router>
        <Bg>
          <ButtonSection>
            <AuthButton />

            <Switch>
              <Route path="/Login">
                <Signup />
              </Route>
              <Route path="/Signup">
                <Signup />
              </Route>
            </Switch>
          </ButtonSection>
        </Bg>
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
        <Button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
      </p>
      <Dashboard />
    </>
  ) : (
    <>
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
      <Button onClick={login}>Log in</Button>
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
      <Button>Register</Button>
    </Link>
  );
}
