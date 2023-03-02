import React from "react";

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import GirlImage from "assets/images/girl.jpg";
import Logo from "assets/images/logo-listen-up-transparent.png";
import { colorSmokeWhite } from "assets/styles/colors";
import { styled } from "@mui/material/styles";

export const StyledContainerImage = ({ children }) => {
  return (
    <Grid
      item
      sm={6}
      md={8}
      sx={{
        backgroundImage: `url(${GirlImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0",
      }}
    >
      {children}
    </Grid>
  );
};

export const StyledBoxContainer = ({ children }) => (
  <Box
    sx={{
      my: 8,
      mx: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);

export const StyledGridContainer = ({ children }) => (
  <Grid
    container
    component="main"
    sx={{ height: "100vh", backgroundColor: colorSmokeWhite }}
  >
    {children}
  </Grid>
);

export const StyledBoxLogoContainerLeft = styled(Box)({
  height: "156px",
  width: "250px",
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  position: "absolute",
});
