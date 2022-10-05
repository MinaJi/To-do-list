import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

// const StyledDiv = styled.div`
//   padding-top: 10px;
//   padding-left: 30px;
//   font-family: 'Noto Sans KR', sans-serif;
//   font-size: 20px;
// `;

const StyledGrid = styled(Grid)`
  && {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 30px;
  }
`;

function TodoHeader() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Container>
      <StyledGrid item xs={12} spacing={10}>
        {year}년 {month}월 {day}일
      </StyledGrid>
    </Container>
  );
}

export default TodoHeader;
