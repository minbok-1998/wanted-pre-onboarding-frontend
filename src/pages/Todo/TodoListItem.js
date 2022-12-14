import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

// 컴포넌트import
import ButtonComponent from "../../components/button";

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

export default function TodoListItem() {
  const access_token = window.localStorage.getItem("token");
  const [item, setItem] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    getTodoItem();
  }, [item]);

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

  const deleteTodoList = async (props) => {
    const id = props;
    const url = `https://pre-onboarding-selection-task.shop/todos/${id}`;
    try {
      const result = await axios.delete(url, { headers: headers });
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodoList = async () => {
    console.log("수정");
  };

  return (
    <Cont>
      {item &&
        item.map((el) => {
          return (
            <List key={el.id}>
              <TodoItem>{el.todo}</TodoItem>
              <div>
                <ButtonComponent btnName="수정" method={updateTodoList}>
                  수정
                </ButtonComponent>
                <ButtonComponent
                  btnName="삭제"
                  method={() => {
                    deleteTodoList(el.id);
                  }}
                >
                  삭제
                </ButtonComponent>
              </div>
            </List>
          );
        })}
    </Cont>
  );
}

//  method={() => {deleteTodoList()}}
