import axios from "axios";
import React from "react";

const SERVER_HOST = process.env.REACT_APP_SERVER;
const SIGNUP = `${SERVER_HOST}/user/register`;
const LOGIN = `${SERVER_HOST}/user/login`;

export const requestSignup = ({ email, password, confirmation }) => {

  const body = { email, password, confirmation };
  return axios
    .post(SIGNUP, body)
   
};

export const requestLogin = ({ email, password }) => {
    const body = { email, password };
    return axios
      .post(LOGIN, body);
  };
  
