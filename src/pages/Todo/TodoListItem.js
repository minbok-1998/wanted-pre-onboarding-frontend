import React from "react";
import styled from "styled-components";

const Cont = styled.ul``;

const List = styled.li`
  display: flex;
  background-color: beige;
`;

const TodoItem = styled.p`
  margin: 10px 30px 10px 0;
`;

const DeleteBtn = styled.button``;

export default function TodoListItem() {
  return (
    <Cont>
      <List>
        <TodoItem>sdsdfdsfssdfdsfsdfsfdgds</TodoItem>
        <DeleteBtn>삭제</DeleteBtn>
      </List>
    </Cont>
  );
}
