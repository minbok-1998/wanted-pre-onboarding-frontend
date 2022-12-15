import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import ButtonComponent from "../../components/ButtonComponent";
=======
import ButtonComponent from "../../components/button";
>>>>>>> a2a9156695359666a9a5f01dbcc998171ff89fb7

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
