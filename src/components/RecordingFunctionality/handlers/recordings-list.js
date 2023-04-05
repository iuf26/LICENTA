import React from "react";
import { useSelector } from "react-redux";

import { mappingGeneratePlaylistRequest } from "helpers/mappings";
import { requestSpotifyGeneratedPlaylist } from "helpers/streaming";
import { selectUsername } from "redux/selectors/accountSelector";

export function deleteAudio(audioKey, setRecordings) {
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}

export function predictEmotion(
  file,
  setIsFinished,
  setIsLoading,
  setPrediction,
  username
) {
  const formData = new FormData();
  setIsLoading(true);
  setIsFinished(false);
  formData.append("recording", file);
  fetch(process.env.REACT_APP_SER_URI, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      const prediction = mappingGeneratePlaylistRequest(response, username);
      setPrediction({ ...prediction });
      setIsFinished(true);
      setIsLoading(false);
    })
    .catch((error) => console.error(error));
}
