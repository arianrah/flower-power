import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";
import InputLabel from "./InputLabel";

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

          <InputLabel controlId="firstName" message={"first name"} />
          <input
            type="text"
            name="first-name"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />

          <InputLabel controlId="lastName" message={"last name"} />
          <input
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
