import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/TitleComponent";
import TodoInput from "./TodoInput";
import TodoListItem from "./TodoListItem";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 150px 0 0 0;
`;

export default function TodoPage() {
  const token = window.localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <Cont>
          <Inner>
            <TitleComponent title={"Todo List"} />
            <TodoInput />
            <TodoListItem />
          </Inner>
        </Cont>
      ) : (
        <Link to={"/"}></Link>
      )}
    </div>
  );
}
