import axios from "axios";

const SERVER_HOST = process.env.REACT_APP_SERVER;
const SIGNUP = `${SERVER_HOST}/user/register`;
const LOGIN = `${SERVER_HOST}/user/login`;
const RESET_PASSWORD_RESET_LINK_EMAIL = `${SERVER_HOST}/user/password-reset`;
const RESET_PASSWORD = `${SERVER_HOST}/user/password-reset/new-credentials`;

export const requestSignup = ({ email, password, confirmation }) => {
  const body = { email, password, confirmation };
  return axios.post(SIGNUP, body);
};

export const requestLogin = ({ email, password }) => {
  const body = { email, password };
  return axios.post(LOGIN, body);
};

export const requestResetPassword = ({ email }) => {
  return axios.get(`${RESET_PASSWORD_RESET_LINK_EMAIL}?email=${email}`);
};

export const requestPasswordUpdate = ({ email, password, confirmation }) => {
  //if (password !== confirmation) throw new Error
  const body = { email, password, confirmation };
  return axios.post(RESET_PASSWORD, body);
};
