import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// 컴포넌트import
import ButtonComponent from "../../components/button";

const Form = styled.form`
  display: flex;
  margin: 30px 0 0 0;
`;

const Input = styled.input`
  padding: 10px 20px;
  margin: 0 30px 0 0;
  border-radius: 5px;
  font-size: 18px;
`;

export default function TodoInput() {
  const access_token = window.localStorage.getItem("token");
  const [todo, setTodo] = useState("");
  const handleInputOnchange = async (e) => {
    setTodo(e.target.value);
  };

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const submitTodo = async (e) => {
    const url = `https://pre-onboarding-selection-task.shop/todos`;

    try {
      e.preventDefault();
      const result = await axios.post(
        url,
        { todo: todo },
        { headers: headers }
      );
      setTodo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form method="post" onSubmit={submitTodo}>
      <Input value={todo} onChange={handleInputOnchange} />
      <ButtonComponent type="submit" btnName="저장">
        저장
      </ButtonComponent>
    </Form>
  );
}
