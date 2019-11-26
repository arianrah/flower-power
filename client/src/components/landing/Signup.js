import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  background-color: green;
`;
const FormGroup = styled.div`
  display: flex;
`;
const FormControl = styled.input`
  color: grey;
`;
const ControlLabel = styled.p`
  background-color: blue;
`;

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Handled submit..");
    console.log(email);
    axios({
      method: "post",
      url: "/api/register",
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password
      }
    });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="firstName">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            autoFocus
            type="first-name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lastName">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            autoFocus
            type="last-name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
