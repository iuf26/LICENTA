import { useSelector } from "react-redux";

import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { TopBar } from "components/Pages/LandingPage/TopBar";
import { selectIsAuth } from "redux/selectors/accountSelector";

import { MenuDrawer } from "./MenuDrawer";

export const Home = () => {
  return <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <TopBar />
    <MenuDrawer />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
  </Box>;
};
