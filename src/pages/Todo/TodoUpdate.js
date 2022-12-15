import React from "react";
import ButtonComponent from "../../components/ButtonComponent";

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
