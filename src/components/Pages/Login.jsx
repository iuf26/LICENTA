import React, { useCallback, useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GirlImage from "assets/images/girl.jpg";
import { colorSmokeWhite } from "assets/styles/colors";
import { StyledBoxLogoContainerLeft } from "assets/styles/homePage.styles";
import { useNotification } from "helpers/notifications/useNotification.hook";
import { requestLogin } from "helpers/requests";
import { useSnackbar } from "notistack";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { displayNotification } = useNotification();
  const { enqueueSnackbar } = useSnackbar();

  const signIn = useCallback(() => {
    requestLogin({ email, password })
      .then((res) => {
        console.log({ stat: res.status, data: res.data });
        // displayNotification({
        //   open: true,
        //   type: "success",
        //   message: res.data.message,
        // });
        enqueueSnackbar('This is a success message!', { variant:"warning" });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [password, email, displayNotification]);

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <StyledBoxLogoContainerLeft />
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: colorSmokeWhite }}
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
              Sign in
            </Typography>
            <Box component="form" noValidatesx={{ mt: 1 }}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordChanged}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signIn}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  displayNotification({
                    open: true,
                    type: "info",
                    message: "ciao",
                  });
                }}
              >
                Ciao
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
