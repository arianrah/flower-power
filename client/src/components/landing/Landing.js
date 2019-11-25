import React from "react";
import Dashboard from "../dashboard/Dashboard";
import styled from "styled-components";
import landing_image from "./landing.jpg";
import tablet_image from "./landing_tablet.jpg";
import cell_image from "./landing_cell.jpg";
// import Button from "../ButtonLanding";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.
const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  padding: 8px
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

export default function Landing(props) {
  return (
    <Bg>
      <ButtonSection>
        <Button>Login</Button>
        <Button>Signup</Button>
      </ButtonSection>
    </Bg>
  );
}

//  <Button onClick={login}>Log in</Button>
