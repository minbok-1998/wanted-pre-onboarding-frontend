import React from "react";
import styled from "styled-components";
import TitleComponent from "../../components/Title";
import TodoInput from "./TodoInput";
import TodoListItem from "./TodoListItem";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  background-color: pink;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 150px 0 0 0;
  background-color: #fff;
`;

export default function TodoPage() {
  return (
    <Cont>
      <Inner>
        <TitleComponent title={"Todo List"} />
        <TodoInput />
        <TodoListItem />
      </Inner>
    </Cont>
  );
}
