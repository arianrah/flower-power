import React, { useState } from "react";

import Button from "./ButtonLanding";
import ButtonDiv from "./ButtonDiv";
import InputFieldStyle from "./InputFieldStyle";
import InputDiv from "./InputDiv";
import Bg from "./Bg";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

            <InputFieldStyle
              controlId="password"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={event => setPassword(event.target.value)}
            />

            <InputFieldStyle
              controlId="firstName"
              type="text"
              name="first-name"
              value={firstName}
              placeholder="frist name"
              onChange={event => setFirstName(event.target.value)}
            />

            <InputFieldStyle
              controlId="lastName"
              type="text"
              name="last-name"
              value={lastName}
              placeholder="last name"
              onChange={event => setLastName(event.target.value)}
            />
          </InputDiv>
          <ButtonDiv>
            <Button
              onClick={() =>
                props.onSignup(email, password, firstName, lastName)
              }
            >
              Signup
            </Button>
          </ButtonDiv>
        </form>
      </Bg>
    </div>
  );
}
