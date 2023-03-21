import { useCallback, useState } from "react";

import HeadsetIcon from "@mui/icons-material/Headset";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import RecorderControls from "components/RecordingFunctionality/components/recorder-controls";
import RecordingsList from "components/RecordingFunctionality/components/recordings-list";
import useRecorder from "components/RecordingFunctionality/hooks/useRecorder";
import {
  formatMinutes,
  formatSeconds,
} from "components/RecordingFunctionality/utils/format-time";
import "semantic-ui-css/semantic.min.css";

export const Recorder = ({ handlers, recorderState, predictionLoading }) => {
  const [pulse, setPulse] = useState(false);
  const [recordingState, setRecordingState] = useState("stop");
  const { recordingMinutes, recordingSeconds } = recorderState;
  const { startRecording, saveRecording } = handlers;

  const buttonSx = {
    bgcolor: "linear-gradient(to right, #41295a, #2f0743);",
    width: "10rem",
    height: "10rem",
  };
  const handleListenButtonClick = useCallback(() => {
    setPulse((prev) => !prev);
    if (recordingState === "stop") {
      startRecording();
    } else {
      saveRecording();
    }
    setRecordingState((prev) => (prev === "start" ? "stop" : "start"));
  }, [setPulse, startRecording, recordingState, saveRecording]);

  return (
    <Box
      display="flex"
      width="100%"
      height="50rem"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
    >
      {recordingState === "start" && (
        <div className="recording-time">
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
      )}
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
            color: "#B82AF5", //#E09AF1
            position: "absolute",
            top: "20.8rem",
            marginTop: 0,
            marginLeft: "0",
          }}
        />
      )}
    </Box>
  );
};
