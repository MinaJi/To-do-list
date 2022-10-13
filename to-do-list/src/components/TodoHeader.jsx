import { Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const StyledGrid = styled(Grid)`
  && {
    font-size: 28px;
    font-weight: bold;
    color: #252525;
    padding-top: 33px;
    padding-left: 13px;
  }
`;

const StyledGrid2 = styled(Grid)`
  && {
    font-size: 23px;
    color: #6f6f6f;
    padding-left: 13px;
    padding-bottom: 40px;
    padding-top: 3px;
  }
`;

const StyledGrid3 = styled(Grid)`
  && {
    color: #447acb;
    font-size: 18px;
    font-weight: bold;
    padding-left: 13px;
    padding-bottom: 10px;
  }
`;

function TodoHeader() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const nowWeekDay = weekDay[new Date().getDay()];

  const todos = useTodoState();
  // console.log(todos);
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <Container>
      <StyledGrid item xs={12}>
        {year}년 {month}월 {day}일
      </StyledGrid>
      <StyledGrid2>{nowWeekDay}</StyledGrid2>
      <StyledGrid3>할 일 {undoneTasks.length}개 남음</StyledGrid3>
      <Divider />
    </Container>
  );
}

export default TodoHeader;
