import React from "react";
import styled, { css } from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CheckBox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #aeaeae;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #447acb;
      color: #447acb;
    `}
`;

const Contents = styled.div`
  font-size: 18px;
  color: #252525;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: #aeaeae;
    `}
`;

const DeleteContents = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  color: #bdbdbd;
  &:hover {
    color: #ff7070;
  }
  display: none;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  &:hover {
    ${DeleteContents} {
      display: initial;
    }
  }
`;

function TodoItems({ id, done, contents }) {
  return (
    <StyledDiv>
      <CheckBox done={done}>{done && <DoneIcon />}</CheckBox>
      <Contents done={done}>{contents}</Contents>
      <DeleteContents>
        <DeleteForeverIcon />
      </DeleteContents>
    </StyledDiv>
  );
}

export default TodoItems;
