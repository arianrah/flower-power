import React from "react";
import styled from "styled-components";
import Button from "./ButtonLanding";

const LeadingSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding-top: 75vh;
`;

export default function Landing(props) {
  return (
    <LeadingSection>
      <Button onClick={props.onLogin}>Login</Button>
      <Button onClick={props.onSignup}>Signup</Button>
    </LeadingSection>
  );
}
