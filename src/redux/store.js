import { configureStore } from "@reduxjs/toolkit";
import { AccountReducer } from "redux/slices/accountSlice";

export const store = configureStore({
  reducer: {
    account: AccountReducer,
  },
});
