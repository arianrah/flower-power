import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";
import InputLabel from "./InputLabel";
import InputFieldStyle from "./InputFieldStyle";

const SignupComponents = styled.div`
  display: flex;
  padding-top: 60vh;
`;

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <SignupComponents>
          <InputLabel controlId="email" message={"email"} />
          <InputFieldStyle
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <InputLabel controlId="password" message={"password"} />
          <InputFieldStyle
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <InputLabel controlId="firstName" message={"first name"} />
          <InputFieldStyle
            type="text"
            name="first-name"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />

          <InputLabel controlId="lastName" message={"last name"} />
          <InputFieldStyle
            type="text"
            name="last-name"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />

          <Button
            onClick={() => props.onSignup(email, password, firstName, lastName)}
          >
            Signup
          </Button>
        </SignupComponents>
      </form>
    </div>
  );
}
