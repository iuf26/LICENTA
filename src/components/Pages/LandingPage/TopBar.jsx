import React from "react";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "assets/images/logo-listen-up-transparent.png";
import { requestLogout } from "helpers/account";
import { colorSpotifyGreen } from "assets/styles/colors";
import { Icon } from '@iconify/react';
import AccountMenu from "./AccountMenu";

export const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap component="div">
          <img
            src={Logo}
            alt="Listen up logo"
            style={{ width: "8rem", margin: 0 }}
          />
        </Typography>
        <div>
          <AccountMenu/>
        </div>
      </Toolbar>
    </AppBar>
  );
};
