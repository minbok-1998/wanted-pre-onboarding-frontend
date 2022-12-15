import React from "react";
import styled from "styled-components";

const Cont = styled.input.attrs({
  autoFocus: true,
})`
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
`;

export default function Input(props) {
  return (
    <Cont
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.method}
    />
  );
}
