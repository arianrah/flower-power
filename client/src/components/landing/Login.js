import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";
import ButtonDiv from "./ButtonDiv";
import InputFieldStyle from "./InputFieldStyle";
import InputDiv from "./InputDiv";

const LoginComponents = styled.div`
  display: flex;
  padding-top: 60vh;
  justify-content: space-evenly;
`;

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
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
          <Button onClick={() => props.onLogin(email, password)}>Login</Button>
        </ButtonDiv>
      </form>
    </div>
  );
}
