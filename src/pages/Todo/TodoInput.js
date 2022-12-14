import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const CreateBtn = styled.button``;

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

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form method="post" onSubmit={submitTodo}>
      <Input onChange={handleInputOnchange} />
      <CreateBtn type="submit">저장</CreateBtn>
    </Form>
  );
}
