export const mappingGeneratePlaylistRequest = (response, username) => {
  return {
    detectedEmotion: response.predictedEmotion,
    loudness: response.audioLoudness,
    tempo: response.tempo,
    username,
  };
};

export const mapResponse = (response) => {
  return {
    message: response.data.message,
    body: response.data.body,
    status: response.status,
    severity: response.data.severity,
  };
};

export const mapError = (error) => {
  return {
    message: error.response.data.message,
    body: error.response.data.body,
    status: error.response.status,
    severity: error.response.data.severity,
  };
};

export const mapPredictionEmotion = (prediction) => {
  return {
    detectedEmotion: prediction.predictedEmotion,
  };
};

//recommentations.tracks - lista
// pentru accesarea unui link extern al unei melodii recomandate: recommentations.tracks[0].external_urls.spotify
const mapSpotifyRecommendations = (body) => {};
