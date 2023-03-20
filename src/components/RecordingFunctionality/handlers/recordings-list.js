export function deleteAudio(audioKey, setRecordings) {
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}

export const predictEmotion = (
  file,
  setIsFinished,
  setIsLoading,
  setPrediction
) => {
  const formData = new FormData();
  formData.append("recording", file);
  fetch(process.env.REACT_APP_SER_URI, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      setIsFinished(true);
      setIsLoading(false);
      setPrediction(response);
    })
    .catch((error) => console.error(error));
};
