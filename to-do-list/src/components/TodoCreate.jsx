import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const StyledBtn = styled.button`
  width: 60px;
  height: 60px;
  background: #447acb;
  &:hover {
    background: #5d91df;
  }
  &:active {
    background: #356ec2;
  }
  z-index: 5;
  cursor: pointer;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #ffffff;
  position: absolute;
  left: 90%;
  bottom: 10%;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff7070;
      &:hover {
        background: #ff9797;
      }
      &:active {
        background: #ff5a5a;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
  @media screen and (max-width: 700px) {
    left: 87%;
    width: 50px;
    height: 50px;
  }
`;

const StyledDiv = styled.div`
  width: 80%;
  bottom: 0;
  left: 37px;
  position: absolute;
  @media screen and (max-width: 700px) {
    left: 25px;
  }
`;

const StyledForm = styled.form`
  padding-top: 10px;
  padding-bottom: 24px;
  background-color: inherit;
`;

const StyledInput = styled.input`
  padding: 12px;
  width: 80%;
  outline: none;
  border: none;
  border-bottom: 2px solid #aaaaaa9f;
  font-size: 18px;
  background-color: inherit;
  @media screen and (max-width: 700px) {
    width: 68%;
    font-size: 15px;
  }
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        contents: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <StyledDiv>
          <StyledForm onSubmit={onSubmit}>
            <i>✏️</i>
            <StyledInput
              autoFocus
              placeholder="입력 후 Enter를 눌러주세요."
              onChange={onChange}
              value={value}
            />
          </StyledForm>
        </StyledDiv>
      )}
      <StyledBtn onClick={onToggle} open={open}>
        <AddIcon fontSize="inherit" />
      </StyledBtn>
    </>
  );
}

export default React.memo(TodoCreate);
