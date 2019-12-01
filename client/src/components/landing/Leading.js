import React from "react";

import Button from "./ButtonLanding";
import ButtonDiv from "./ButtonDiv";
import Bg from "./Bg";

export default function Landing(props) {
  return (
    <Bg>
      <ButtonDiv>
        <Button onClick={props.onLogin}>Login</Button>
        <Button onClick={props.onSignup}>Signup</Button>
      </ButtonDiv>
    </Bg>
  );
}
