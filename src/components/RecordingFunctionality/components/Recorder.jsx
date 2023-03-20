import { useCallback, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import HeadsetIcon from "@mui/icons-material/Headset";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import RecorderControls from "components/RecordingFunctionality/components/recorder-controls";
import RecordingsList from "components/RecordingFunctionality/components/recordings-list";
import useRecorder from "components/RecordingFunctionality/hooks/useRecorder";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export const Recorder = () => {
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(false);
  useState("stateOne");
  const { recorderState, addRecording, ...handlers } = useRecorder();
  const { audio } = recorderState;
  const buttonSx = {
    bgcolor: "linear-gradient(to right, #41295a, #2f0743);",
    width: "10rem",
    height: "10rem",
  };
  const handleListenButtonClick = useCallback(() => {
    setPulse((prev) => !prev);
  }, [setPulse]);

  return (
    <Box
      display="flex"
      width="100%"
      height="50rem"
      alignItems="center"
      justifyContent="center"
    >
      <Fab
        aria-label="save"
        sx={buttonSx}
        onClick={handleListenButtonClick}
        size="large"
        color="secondary"
        className={pulse ? "pulse" : ''}
      >
        {<HeadsetIcon sx={{ fontSize: "80px" }} />}
      </Fab>
      {loading && (
        <CircularProgress
          size={168}
          sx={{
            color: "#B82AF5", //#E09AF1
            position: "inherit",
            top: "25rem",
            marginTop: 0,
            marginLeft: "-11rem",
          }}
        />
      )}
    </Box>
  );
};
