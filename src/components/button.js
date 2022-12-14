import React from "react";
import styled from "styled-components";

const Button = styled.button``;

export default function ButtonComponent(props) {
  return <Button onClick={props.method}>{props.btnName}</Button>;
}
