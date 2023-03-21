import axios from "axios";

export const SPOTIFY_LOGIN_REQUEST = `${process.env.REACT_APP_SERVER}/stream/spotify/login`;
const SPOTIFY_GENERATE_PLAYLIST_REQUEST = `${process.env.REACT_APP_SERVER}/stream/spotify/recommandations`;

export const requestSpotifyLogin = (username) => {
  return axios.get(`${SPOTIFY_LOGIN_REQUEST}/${username}`, {
    withCredentials: true,
  });
};

export const requestSpotifyGeneratedPlaylist = (
  username,
  detectedEmotion,
  loudness,
  tempo
) => {
  const body = {
    detectedEmotion,
    loudness,
    tempo,
  };
  return axios.post(`${SPOTIFY_GENERATE_PLAYLIST_REQUEST}/${username}`, body, {
    withCredentials: true,
  });
};
