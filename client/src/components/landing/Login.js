import React, { useState } from "react";

import Button from "./ButtonLanding";
import ButtonDiv from "./ButtonDiv";
import InputFieldStyle from "./InputFieldStyle";
import InputDiv from "./InputDiv";
import Bg from "./Bg";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Bg>
        <form onSubmit={event => event.preventDefault()}>
          <InputDiv>
            <InputFieldStyle
              controlId="email"
              type="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={event => setEmail(event.target.value)}
            />
            {/* <InputLabel controlId="password" message={"password"} /> */}
            <InputFieldStyle
              controlId="password"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={event => setPassword(event.target.value)}
            />
          </InputDiv>
          <ButtonDiv>
            <Button onClick={() => props.onLogin(email, password)}>
              Login
            </Button>
          </ButtonDiv>
        </form>
      </Bg>
    </div>
  );
}
