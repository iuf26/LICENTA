import { configureStore } from "@reduxjs/toolkit";
import { AccountReducer } from "redux/slices/accountSlice";
import { PlaylistRecommendReducer } from "./slices/playlistRecommendSlice";

export const store = configureStore({
  reducer: {
    account: AccountReducer,
    playlistRecommendation: PlaylistRecommendReducer
  },
});
