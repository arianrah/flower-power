import styled from "styled-components";
import React, { Fragment } from "react";

const Label = styled.label`
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
`;

export default function InputLabel(props) {
  return (
    <Fragment>
      <Label>{props.message}</Label>
    </Fragment>
  );
}
