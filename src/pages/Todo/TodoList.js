import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent";

const TodoItem = styled.p``;

export default function TodoList(props) {
  return (
    <>
      <TodoItem>{props.todo}</TodoItem>
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
    </>
  );
}
