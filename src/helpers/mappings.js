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
export const mapSpotifyRecommendationsTracks = (resp) => {
  return {
    tracks: resp.data.body.recommendation.body.tracks,
    seedArtists: resp.data.body.artistsFound,
  };
};

export const mapSpotifyTrack = (track) => {
  return {
    durationMs: track.duration_ms,
    previewUrl: track.preview_url,
    externalUrl: track.external_urls.spotify,
    apiTrackPrivateUrl: track.href,
    title: track.name,
    artist: track.artists[0].name,
    artistId: track.artists[0].id,
    artists: track.artists,
    albumImages: track.album.images,
    trackUri: track.uri,
  };
};

export const mapSpeech2TextTranscription = (resp) => {
  console.log({ resp });
  return {
    text: resp.data?.utterances[0]?.text,
    words: resp.data?.utterances[0]?.words,
  };
};
