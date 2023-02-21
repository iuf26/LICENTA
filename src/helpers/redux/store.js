import { configureStore } from "@reduxjs/toolkit";
import { NotificationReducer } from "helpers/notifications/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
  },
});
