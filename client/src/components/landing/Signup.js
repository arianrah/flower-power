import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";
import InputLabel from "./InputLabel";

const SignupComponents = styled.div`
  display: flex;
  padding-top: 60vh;
`;
const FormGroup = styled.div`
  display: flex;
`;
const FormControl = styled.input`
  color: grey;
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
          <InputLabel controlId="email" message={"email"}>
            Email
          </InputLabel>
          <FormControl
            type="text"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <FormGroup controlId="password">
            <InputLabel controlId="password" message={"password"}>
              Password
            </InputLabel>
            <input
              type="text"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="firstName">
            <InputLabel>First Name</InputLabel>
            <FormControl
              type="text"
              name="first-name"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="lastName">
            <InputLabel>Last Name</InputLabel>
            <FormControl
              type="text"
              name="last-name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Signup</Button>
        </SignupComponents>
      </form>
    </div>
  );
}
