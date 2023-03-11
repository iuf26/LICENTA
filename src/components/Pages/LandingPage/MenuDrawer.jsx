import * as React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import { Drawer, DrawerHeader } from "assets/styles/styledComponents";
import { TopBar } from "components/Pages/LandingPage/TopBar";
import { drawerMenuOptions } from "helpers/menuDrawer";

const drawerWidth = 210;

export function MenuDrawer() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Drawer
        variant="permanent"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerMenuOptions.map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "initial",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
