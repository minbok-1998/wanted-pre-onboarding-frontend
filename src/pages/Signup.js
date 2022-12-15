import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 컴포넌트 import
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const Cont = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Inner = styled.div`
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Lable = styled.label`
  text-align: left;
  padding: 20px 0 0 0;
`;

const Button = styled.button`
  padding: 20px 0;
  margin: 40px 0 0 0;
  border-radius: 5px;
  font-size: 18px;
`;

export default function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    checkData();
  }, [{ checkEmail, checkPassword }]);

  const handleUserId = async (e) => {
    const regex = new RegExp("^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+$");
    if (regex.test(e.target.value)) {
      setCheckEmail(true);
    }
    setUserEmail(e.target.value);
  };

  const handleUserPassword = async (e) => {
    if (e.target.value.length >= 8) {
      setCheckPassword(true);
    }
    setUserPassword(e.target.value);
  };

  const checkValidation = async (e) => {
    e.preventDefault();
    if (validation) {
      handleFormSubmit();
    }
  };

  const checkData = async () => {
    if (checkEmail && checkPassword) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  const val = {
    email: userEmail,
    password: userPassword,
  };

  const handleFormSubmit = async (e) => {
    const url = `https://pre-onboarding-selection-task.shop/auth/signup`;

    try {
      await axios.post(url, val);
      setUserEmail("");
      setUserPassword("");
      alert("회원가입이 완료되었습니다!");
      window.location.href = "/";
    } catch (err) {
      alert("회원가입에 실패하였습니다.");
      setUserEmail("");
      setUserPassword("");
    }
  };

  return (
    <Cont>
      <Inner>
        <h1>회원가입</h1>
        <Form onSubmit={checkValidation}>
          <Lable htmlFor="inputEmail">이메일</Lable>
          <InputComponent
            type="email"
            name="inputId"
            value={userEmail}
            method={handleUserId}
          />
          <Lable htmlFor="inputPassword">비밀번호</Lable>
          <InputComponent
            type="password"
            name="inputPassword"
            value={userPassword}
            method={handleUserPassword}
          />

          <ButtonComponent
            type="submit"
            disabled={!validation}
            btnName="회원가입"
            size="21px"
            padding="20px 0"
            margin="40px 0 0 0"
          />
        </Form>
      </Inner>
    </Cont>
  );
}
