import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";
import InputLabel from "./InputLabel";

const LoginComponents = styled.div`
  display: flex;
  padding-top: 60vh;
  justify-content: space-evenly;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5vh;
`;

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <LoginComponents>
          <InputLabel controlId="email" message={"email"} />
          <input
            type="text"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <InputLabel controlId="password" message={"password"} />
          <input
            type="text"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </LoginComponents>
        <ButtonDiv>
          <Button onClick={() => props.onLogin(email, password)}>Login</Button>
        </ButtonDiv>
      </form>
    </div>
  );
}