import React from "react";
import { useSelector } from "react-redux";

import { Snackbar, Alert, Slide } from "@mui/material";
import { useNotification } from "helpers/notifications/useNotification.hook";

export const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const { clearNotification } = useNotification();
  const transitionLeft = (props) =>  <Slide {...props} direction="left" />;
  
  const handleClose = (reason) => reason !== "clickaway" && clearNotification();

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={transitionLeft}
    >
      <Alert
        variant='filled'
        onClose={handleClose}
        severity={notification.type}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};
