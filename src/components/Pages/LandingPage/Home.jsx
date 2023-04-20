import { useSelector } from "react-redux";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CssBaseline, Fab, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import { TutorialCard } from "components/Cards/TutorialCard";
import { TopBar } from "components/Pages/LandingPage/TopBar";
import { selectIsAuth } from "redux/selectors/accountSelector";

import { MenuDrawer } from "./MenuDrawer";

export const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <MenuDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "7rem",
          }}
        >
          <Typography variant="h3" marginTop="7rem">
            Welcome to our community!
          </Typography>
          <Box style={{ display: "flex", gap: "1rem" }}>
            <Typography variant="h4">Take an app tour</Typography>
            <Fab size="small" color="primary" aria-label="add">
              <ArrowForwardIcon />
            </Fab>
          </Box>
          <Box
            style={{
              display: "flex",
              marginTop: "3rem",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <TutorialCard
              imageSrc={"tutorial1.png"}
              text={
                "For Listen Up! to deliver the best experience,you will need to link to your spotify account."
              }
              title={"Step 1"}
            />
            <TutorialCard
              imageSrc={"tutorial2.png"}
              text="In the DJ section, click the headphones circle to start recording your voice. 
              DJ can detect your voice emotion and it understands Artists names. After you click PREDICT MY EMOTION DJ will display the result.
              If you are not satisfied with the response you can try again any time."
              title={"Step 2"}
            />
            <TutorialCard
              imageSrc={"tutorial3.png"}
              text={
                "At this step, DJ should have managed to tell your emotion and artists detected from your vocal command." +
                "Now hit the button GENERATE PLAYLIST for a personalized music portofolio to be created for you!"
              }
              title={"Step 3"}
            />
            <TutorialCard
              imageSrc={"tutorial1.png"}
              text={"hello"}
              title={"Step 4"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
