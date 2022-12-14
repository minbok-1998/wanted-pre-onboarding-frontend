import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Cont = styled.ul`
  width: 60%;
  margin: 50px 0 10px 0;
  padding: 0 40px;
  box-sizing: border-box;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem = styled.p``;

const DeleteBtn = styled.button``;

export default function TodoListItem() {
  const access_token = window.localStorage.getItem("token");
  const [item, setItem] = useState();

  useEffect(() => {
    getTodoItem();
  }, []);

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const getTodoItem = async () => {
    const url = `https://pre-onboarding-selection-task.shop/todos`;

    try {
      const result = await axios.get(url, { headers: headers });

      setItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Cont>
      {item &&
        item.map((el) => {
          return (
            <List key={el.id}>
              <TodoItem>{el.todo}</TodoItem>
              <DeleteBtn>삭제</DeleteBtn>
            </List>
          );
        })}
    </Cont>
  );
}
