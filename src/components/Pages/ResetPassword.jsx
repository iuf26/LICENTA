import { useCallback, useEffect, useState } from "react";
import { Navigate, useSearchParams, redirect } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField, Typography, Avatar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { StyledBoxLogoContainerLeft } from "assets/styles/styledComponents";
import { requestPasswordUpdate, requestResetPassword } from "helpers/account";
import { mapResponse, mapError } from "helpers/mappings";
import { useSnackbar } from "notistack";
import {StyledContainerImage, StyledBoxContainer, StyledGridContainer} from "assets/styles/styledComponents";

export const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();
  const [emailVerified, setEmailVerified] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  const confirmationChanged = (e) => {
    setConfirmation(e.target.value);
  };

  const onSaveButtonClick = useCallback(() => {
    const email = searchParams.get("email");
    requestPasswordUpdate({ email, password, confirmation })
      .then((res) => mapResponse(res))
      .then((res) => {
        enqueueSnackbar(res.message, { variant: res.severity });
        setTimeout(() => {console.log("h");redirect("/account/login")}, 3000);
      })
      .catch((error) => {
        error = mapError(error);
        enqueueSnackbar(error.message, { variant: error.severity });
      });
  }, [searchParams, confirmation, password, enqueueSnackbar]);

  const onResetPasswordButtonClick = useCallback(() => {
    requestResetPassword({ email })
      .then((res) => mapResponse(res))
      .then((res) => {
        enqueueSnackbar(res.message, { variant: res.severity });
      })
      .catch((error) => {
        error = mapError(error);
        enqueueSnackbar(error.message, { variant: error.severity });
      });
  }, [email, enqueueSnackbar]);

  return (
    <>
      <StyledBoxLogoContainerLeft />
      <StyledGridContainer>
        <CssBaseline />
        <StyledContainerImage/>
        <Grid item md={4}>
          <StyledBoxContainer>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidatesx={{ mt: 1 }}>
              {searchParams.get("email") ? (
                <>
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
                    onClick={onSaveButtonClick}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={emailChanged}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onResetPasswordButtonClick}
                  >
                    Reset Password
                  </Button>
                </>
              )}
            </Box>
          </StyledBoxContainer>
        </Grid>
      </StyledGridContainer>
    </>
  );
};
