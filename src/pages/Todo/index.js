import React from "react";
import { Navigate } from "react-router-dom";
import Todo from "./Todo";

export default function TodoPage() {
  const token = window.localStorage.getItem("token");
  return <div>{token ? <Todo /> : <Navigate to="/" />}</div>;
}
