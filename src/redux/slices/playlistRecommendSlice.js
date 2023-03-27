import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mapSpotifyTrack } from "helpers/mappings";

export const playlistRecommendationInitState = {
  tracks: [],
};

export const PlaylistRecommendSlice = createSlice({
  name: "playlistRecommendation",
  initialState: playlistRecommendationInitState,
  reducers: {
    setTracks: (_state, action) => ({
      ..._state,
      tracks: [...action.payload.map(elem => mapSpotifyTrack(elem))],
    }),
  },
});

export const PlaylistRecommendActions = PlaylistRecommendSlice.actions;
export const PlaylistRecommendReducer = PlaylistRecommendSlice.reducer;
