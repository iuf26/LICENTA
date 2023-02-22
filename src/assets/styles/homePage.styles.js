import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Logo from "assets/images/logo-listen-up-transparent.png";

export const StyledBoxLogoContainerLeft = styled(Box)({
  height: "156px",
  width: "250px",
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  position: "absolute",
});
