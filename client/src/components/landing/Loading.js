import React from "react";
import styled from "styled-components";
import Bg from "./Bg";

const Load = styled.div`
  display: flex;
  padding-top: 60vh;
`;

export default function Loading() {
  return (
    <>
      <Bg>
        <Load></Load>
      </Bg>
    </>
  );
}
