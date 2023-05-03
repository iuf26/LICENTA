import { useCallback, useState } from "react";

import HeadsetIcon from "@mui/icons-material/Headset";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { colorPurpleElectric, colorPurplePowder } from "assets/styles/colors";
import RecorderControls from "components/RecordingFunctionality/components/recorder-controls";
import RecordingsList from "components/RecordingFunctionality/components/recordings-list";
import useRecorder from "components/RecordingFunctionality/hooks/useRecorder";
import {
  formatMinutes,
  formatSeconds,
} from "components/RecordingFunctionality/utils/format-time";
import { useSnackbar } from "notistack";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { PlaylistRecommendActions } from "redux/slices/playlistRecommendSlice";
import { DataForMusicRecommendationActions } from "redux/slices/dataForMusicRecommendation";

export const Recorder = ({
  handlers,
  recorderState,
  predictionLoading,
  setShowPredictEmotionButton,
  setPredictionFinished,
  setPlaylistRetrieved,
}) => {
  const [pulse, setPulse] = useState(false);
  const [recordingState, setRecordingState] = useState("stop");
  const { recordingMinutes, recordingSeconds } = recorderState;
  const { startRecording, saveRecording } = handlers;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const buttonSx = {
    bgcolor: "linear-gradient(to right, #41295a, #2f0743);",
    width: "10rem",
    height: "10rem",
    boxShadow: `0px 0px 5px 0px #3A373B`,
  };
  const handleListenButtonClick = useCallback(() => {
    
    setPulse((prev) => !prev);
    if (recordingState === "stop") {
      console.log("hhh");
      dispatch(PlaylistRecommendActions.setTracks(null))
      dispatch(DataForMusicRecommendationActions.setPredictedEmotion(null));
      dispatch(DataForMusicRecommendationActions.setDetectedArtists(null));
      startRecording();
      setPlaylistRetrieved(false);
      setPredictionFinished(false);
      setShowPredictEmotionButton(false);
    } else {
      enqueueSnackbar("Your recording was saved", { variant: "info" });
      saveRecording();
      setShowPredictEmotionButton(true);
    }
    setRecordingState((prev) => (prev === "start" ? "stop" : "start"));
  }, [
    setPulse,
    startRecording,
    recordingState,
    saveRecording,
    enqueueSnackbar,
    setShowPredictEmotionButton,
    setPredictionFinished,
    setPlaylistRetrieved,
  ]);

  return (
    <Box
      display="flex"
      width="100%"
      height="15rem"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
      margin={0}
      marginTop="10rem"
      padding={0}
    >
      <Typography variant="h4">
        Hi! I'm <strong style={{ color: colorPurplePowder }}>DJ!</strong>
      </Typography>
      {/* <Typography variant="h4">
       Tap the headphones button to start recording your voice
      </Typography> */}
      <Fab
        aria-label="save"
        sx={buttonSx}
        onClick={handleListenButtonClick}
        size="large"
        color="secondary"
        className={pulse ? "pulse" : ""}
      >
        {<HeadsetIcon sx={{ fontSize: "80px" }} />}
      </Fab>
      {predictionLoading && (
        <CircularProgress
          size={168}
          sx={{
            color: colorPurplePowder, //#E09AF1
            position: "absolute",
            top: "17.6rem",
            marginTop: 0,
            marginLeft: "0",
          }}
        />
      )}
    </Box>
  );
};
