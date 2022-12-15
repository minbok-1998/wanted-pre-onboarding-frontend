import React from "react";
<<<<<<< HEAD
import ButtonComponent from "../../components/ButtonComponent";
=======
import styled from "styled-components";
import axios from "axios";
import ButtonComponent from "../../components/button";
>>>>>>> a2a9156695359666a9a5f01dbcc998171ff89fb7

export default function TodoListUpdate(props) {
  return (
    <>
      <input
        type="text"
        value={props.updateVal}
        onChange={props.hadleUpdateTodo}
        autoFocus
      />
      <div>
        <ButtonComponent
          btnName="제출"
          method={props.submitUpdateVal}
        ></ButtonComponent>

        <ButtonComponent
          btnName="취소"
          // method={}
        ></ButtonComponent>
      </div>
    </>
  );
}
