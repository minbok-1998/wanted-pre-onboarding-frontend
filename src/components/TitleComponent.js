import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 36px;
`;

export default function TitleComponent(props) {
  return <Title>{props.title}</Title>;
}
