import React from "react";
import { useSelector } from "react-redux";

import { requestSpotifyGeneratedPlaylist } from "helpers/streaming";
import { selectUsername } from "redux/selectors/accountSelector";
import { mappingGeneratePlaylistRequest } from "helpers/mappings";

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
      console.info("emotion was predicted");
      const prediction = mappingGeneratePlaylistRequest(response,username)
      setPrediction({...prediction});
      setIsFinished(true);
      setIsLoading(false);
      // requestSpotifyGeneratedPlaylist(
      //   username,
      //   detectedEmotion,
      //   loudness,
      //   tempo
      // ).then(response => {
      //   console.log(response);
      //   setIsFinished(true);
      //   setIsLoading(false);
      // })
      // .catch(error => {
      //   console.log(error);
      // })
    })
    .catch((error) => console.error(error));
}
