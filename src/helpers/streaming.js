import axios from "axios";

export const SPOTIFY_LOGIN_REQUES = `${process.env.REACT_APP_SERVER}/stream/spotify/login`;

export const requestSpotifyLogin = (username) => {
  return axios.get(`${SPOTIFY_LOGIN_REQUES}/${username}`, {
    withCredentials: true,
  });
};
