import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.padding || "none"};
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.size || "18px"};
`;

export default function ButtonComponent(props) {
  return (
    <Button
      type={props.type}
      disabled={props.disabled}
      onClick={props.method}
      size={props.size}
      padding={props.padding}
      margin={props.margin}
    >
      {props.btnName}
    </Button>
  );
}
