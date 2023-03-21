import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { TopBar } from "components/Pages/LandingPage/TopBar";
import { Recorder } from "components/RecordingFunctionality/components/Recorder";
import useRecordingsList from "components/RecordingFunctionality/hooks/use-recordings-list";
import useRecorder from "components/RecordingFunctionality/hooks/useRecorder";
import { selectUsername } from "redux/selectors/accountSelector";
import { Button } from "semantic-ui-react";

import { MenuDrawer } from "./MenuDrawer";

export const DjPage = () => {
  const [predictedEmotion, setPredictedEmotion] = useState();
  const [loading, setLoading] = useState(false);
  const [predictionFinished, setPredictionFinished] = useState(false);
  const { recorderState, addRecording, ...handlers } = useRecorder();
  const { audio } = recorderState;
  const { recordings, deleteAudio, predictEmotion } = useRecordingsList(audio);
  const username = useSelector(selectUsername);

  const onPredict = useCallback(() => {
    console.log({username});
    predictEmotion(
      setPredictionFinished,
      setLoading,
      setPredictedEmotion,
      username
    );
  }, [
    setPredictionFinished,
    setLoading,
    setPredictedEmotion,
    username,
    predictEmotion,
  ]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <MenuDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Recorder
          recorderState={recorderState}
          handlers={handlers}
          addRecording={addRecording}
          predictionLoading={loading}
        />
        <Button onClick={onPredict}>Predict</Button>
      </Box>
    </Box>
  );
};
