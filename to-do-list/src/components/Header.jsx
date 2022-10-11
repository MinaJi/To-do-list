import React from "react";
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";

const StyledDiv = styled.div`
  font-family: "Lexend", sans-serif;
  font-size: 63px;
  text-align: center;
  margin-bottom: 12px;
  color: #252525;
`;

function Header() {
  return (
    <Grid>
      <StyledDiv>To-do List</StyledDiv>
    </Grid>
  );
}

export default Header;
