import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GirlImage from "assets/images/girl.jpg";
import { StyledBoxLogoContainerLeft } from "assets/styles/homePage.styles";

export const ImageWithLogo = () => {
  return (
    <Grid
    container
    width="101rem">
      <StyledBoxLogoContainerLeft />
      <Grid
        container
        sx={{ height: "100vh", backgroundColor: "#F4F4F4" }}
      >
       
        <Grid
          item
          sm={6}
          md={6.8}
          sx={{
            backgroundImage: `url(${GirlImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 0",
          }}
        />
      </Grid>
    </Grid>
  );
}
