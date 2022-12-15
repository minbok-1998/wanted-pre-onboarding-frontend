import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

// 컴포넌트import
import TodoListUpdate from "./TodoUpdate";
import TodoList from "./TodoList";

const Cont = styled.ul`
  width: 60%;
  margin: 50px 0 10px 0;
  padding: 0 40px;
  box-sizing: border-box;
`;

const List = styled.li`
  display: flex;
  margin: 20px 0 0 0;
  justify-content: space-between;
  align-items: center;
`;

export default function TodoListItem() {
  const access_token = window.localStorage.getItem("token");
  const [item, setItem] = useState();
  const [updataId, setUpdateId] = useState();
  const [updateVal, setUpdateVal] = useState("");

  // [item] 넣어주면 바로 렌더링은 되는데, 계속 데이터 불러와짐
  // 일단 window.location.reload(); 넣어서 해결함
  useEffect(() => {
    getTodoItem();
  }, []);

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  // get
  const getTodoItem = async () => {
    const url = `https://pre-onboarding-selection-task.shop/todos`;

    try {
      const result = await axios.get(url, { headers: headers });
      setItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // delete
  const deleteTodoList = async (props) => {
    const id = props.id;
    const url = `https://pre-onboarding-selection-task.shop/todos/${id}`;
    try {
      if (window.confirm("삭제하시겠습니까?")) {
        window.location.reload();
        const result = await axios.delete(url, { headers: headers });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const val = {
    todo: updateVal,
    isCompleted: true,
  };

  const cancelUpdate = async () => {
    setUpdateId(0);
  };

  const submitUpdateVal = async (props) => {
    const id = props.id;
    const url = `https://pre-onboarding-selection-task.shop/todos/${id}`;
    try {
      if (window.confirm("수정하시겠습니까?")) {
        window.location.reload();
        const result = await axios.put(url, val, { headers: headers });
        await cancelUpdate();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hadleUpdateTodo = async (e) => {
    setUpdateVal(e.target.value);
  };

  const startUpdateTodo = async (props) => {
    setUpdateId(props.id);
    setUpdateVal(props.todo);
  };

  return (
    <Cont>
      {item &&
        item.map((el) => {
          return (
            <List key={el.id}>
              <>
                {updataId == el.id ? (
                  <TodoListUpdate
                    updateVal={updateVal}
                    hadleUpdateTodo={hadleUpdateTodo}
                    submitUpdateVal={() => {
                      submitUpdateVal({ id: el.id });
                    }}
                    cancelUpdate={cancelUpdate}
                  />
                ) : (
                  <TodoList
                    id={el.id}
                    todo={el.todo}
                    startUpdateTodo={() => {
                      startUpdateTodo({ id: el.id, todo: el.todo });
                    }}
                    deleteTodoList={() => {
                      deleteTodoList({ id: el.id });
                    }}
                  />
                )}
              </>
            </List>
          );
        })}
    </Cont>
  );
}
