import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import TitleComponent from "../components/Title";

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

const Input = styled.input`
  padding: 20px 20px;
  border-radius: 5px;
  font-size: 24px;
`;

const Button = styled.button`
  padding: 20px 0;
  margin: 40px 0 0 0;
  border-radius: 5px;
  font-size: 18px;
`;

export default function Login() {
  const token = window.localStorage.getItem("token");
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
    const url = `https://pre-onboarding-selection-task.shop/auth/signin`;

    try {
      const result = await axios.post(url, val);
      const JWT = result.data.access_token;
      window.localStorage.setItem("token", JWT);
      setUserEmail("");
      setUserPassword("");
      alert("로그인 성공!");
      window.location.href = "/todo";
    } catch (err) {
      console.log(err);
      alert("아이디 또는 비밀번호를 확인하세요");
    }
  };

  return (
    <>
      {token ? (
        <Navigate to={"/todo"} />
      ) : (
        <Cont>
          <Inner>
            <TitleComponent title={"로그인"} />
            <Form method="post" onSubmit={checkValidation}>
              <Lable htmlFor="inputEmail">이메일</Lable>
              <Input
                type="email"
                name="inputId"
                value={userEmail}
                onChange={handleUserId}
              />
              <Lable htmlFor="inputPassword">비밀번호</Lable>
              <Input
                type="password"
                name="inputPassword"
                value={userPassword}
                onChange={handleUserPassword}
              />
              <Button type="submit" disabled={!validation}>
                로그인
              </Button>
            </Form>
          </Inner>
        </Cont>
      )}
    </>
  );
}
