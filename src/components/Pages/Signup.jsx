import React, { useCallback, useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button,TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GirlImage from "assets/images/girl.jpg";
import { StyledBoxLogoContainerLeft } from "assets/styles/homePage.styles";
import { requestSignup } from "helpers/requests";

export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();

  const signUp = useCallback(() => {
    requestSignup({ email, password, confirmation })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error({ error: error.response.data });
      });
  }, [email, password, confirmation]);
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };
  const confirmationChanged = (e) => {
    setConfirmation(e.target.value);
  };

  return (
    <>
      <StyledBoxLogoContainerLeft />
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#F4F4F4" }}
      >
        <CssBaseline />
        <Grid
          item
          sm={6}
          md={6.8}
          sx={{
            backgroundImage: `url(${GirlImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 0",
          }}
        />

        <Grid item sm={2} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidatesx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                onChange={emailChanged}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={passwordChanged}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm"
                label="Password confirmation"
                type="password"
                id="passwordConfirm"
                onChange={confirmationChanged}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signUp}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
