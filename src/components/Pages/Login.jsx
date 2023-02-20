import React, { useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, TextField, Typography, Checkbox, FormControlLabel,Link } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GirlImage from "assets/images/girl.jpg";
import { StyledBoxLogoContainerLeft } from "assets/styles/homePage.styles";

export const Login = () => {

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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
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
