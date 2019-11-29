import React from "react";

import Button from "./ButtonLanding";
import ButtonDiv from "./ButtonDiv";

export default function Landing(props) {
  return (
    <ButtonDiv>
      <Button onClick={props.onLogin}>Login</Button>
      <Button onClick={props.onSignup}>Signup</Button>
    </ButtonDiv>
  );
}
