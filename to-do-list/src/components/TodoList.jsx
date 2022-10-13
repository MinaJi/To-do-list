import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItems from "./TodoItems";

const StyledDiv = styled.div`
  flex: 1;
  padding: 20px 37px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <StyledDiv>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          contents={todo.contents}
          done={todo.done}
        />
      ))}
    </StyledDiv>
  );
}

export default TodoList;
