import { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoItem = styled.p`
  margin: 0 0 0 10px;
`;

export default function TodoList(props) {
  return (
    <Wrap>
      <Wrap>
        <TodoItem>{props.todo}</TodoItem>
      </Wrap>
      <div>
        <ButtonComponent
          btnName="수정"
          method={props.startUpdateTodo}
        ></ButtonComponent>

        <ButtonComponent
          btnName="삭제"
          method={props.deleteTodoList}
        ></ButtonComponent>
      </div>
    </Wrap>
  );
}
