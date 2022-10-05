import React from "react";
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";

const StyledDiv = styled.div`
  font-family: "Raleway Dots", cursive;
  font-size: 65px;
  text-align: center;
  margin-bottom: 12px;
`;

function Header() {
  return (
    <Grid>
      <StyledDiv>To-do List</StyledDiv>
    </Grid>
  );
}

export default Header;
