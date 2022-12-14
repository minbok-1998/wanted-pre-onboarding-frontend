import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  width: 70%;
  height: 100vh;
  background-color: red;
`;

export default function Inner({ chileren }) {
  return <Cont>{chileren}</Cont>;
}
