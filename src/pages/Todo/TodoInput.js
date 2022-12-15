import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// 컴포넌트import
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";

const Form = styled.form`
  display: flex;
  margin: 30px 0 0 0;
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
      window.location.reload();
      setTodo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form method="post" onSubmit={submitTodo}>
      <InputComponent value={todo} method={handleInputOnchange} />
      <ButtonComponent type="submit" btnName="저장">
        저장
      </ButtonComponent>
    </Form>
  );
}
