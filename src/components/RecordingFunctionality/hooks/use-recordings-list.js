import { useState, useEffect } from "react";

import { deleteAudio, predictEmotion } from "../handlers/recordings-list";
import generateKey from "components/RecordingFunctionality/utils/generate-key";

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState();

  useEffect(() => {
    if (audio) {
      setRecordings((prevState) => {
        console.log({ audio });
        return { key: generateKey(), audio };
      });
    }
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
    predictEmotion: (setIsFinished, setIsLoading, setPrediction,username) => {
      const file = recordings.audio;
      predictEmotion(file, setIsFinished, setIsLoading, setPrediction,username);
    },
  };
}
