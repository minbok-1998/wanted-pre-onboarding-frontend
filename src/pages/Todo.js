import React from "react";
import { Navigate } from "react-router-dom";

export default function Todo() {
  const token = window.localStorage.getItem("token");
  return <div>{token ? <h1>Todo 페이지</h1> : <Navigate to="/" />}</div>;
}
