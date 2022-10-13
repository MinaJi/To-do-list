import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const StyledDiv = styled.div`
  flex: 1;
  padding: 20px 37px;
  overflow-y: auto;
`;

function TodoList() {
  return (
      <StyledDiv>
        <TodoItems contents="식빵 사기" done={true} />
        <TodoItems contents="책 반납하기" done={true} />
        <TodoItems contents="NewJeans 뮤비 시청하기" done={false} />
      </StyledDiv>
  );
}

export default TodoList;
