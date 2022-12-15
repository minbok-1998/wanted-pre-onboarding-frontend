import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function TodoListUpdate(props) {
  return (
    <Wrap>
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
          method={props.cancelUpdate}
        ></ButtonComponent>
      </div>
    </Wrap>
  );
}
