import React from "react";
import { Grid, Paper } from "@mui/material";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const StyledDiv = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  border-radius: 45px;
  box-shadow: 0 0 100px 0 rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

function TodoTemplate({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}

export default TodoTemplate;