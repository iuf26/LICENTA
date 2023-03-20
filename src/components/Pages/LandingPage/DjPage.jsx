import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { TopBar } from "components/Pages/LandingPage/TopBar";
import { Recorder } from "components/RecordingFunctionality/components/Recorder";

import { MenuDrawer } from "./MenuDrawer";

export const DjPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <MenuDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Recorder />
      </Box>
    </Box>
  );
};
