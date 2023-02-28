import GirlImage from "assets/images/girl.jpg";
import { colorSmokeWhite } from "assets/styles/colors";
import { Grid } from "semantic-ui-react";

export const StyledGridContainerAccount = (props) => {
  console.log({ props });
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", backgroundColor: colorSmokeWhite }}
    >
      {props.children}
    </Grid>
  );
};

export const StyledGridImageContainer = () => (
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
);
