import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { selectRecommendedTracks } from "redux/selectors/recommendationSelector";

import { TrackItem } from "./TrackItem";

export const TracksList = () => {
  const tracks = useSelector(selectRecommendedTracks);
  useEffect(() => {
    console.log("tracks change");
  }, [tracks]);
  return (
    <Box
      display="flex"
      component="main"
      sx={{ flexGrow: 5, p: 10 }}
      padding={0}
      marginTop={13}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          verticalAlign: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              width: "210px",
              height: "210px",
              backgroundImage: `url("assets/images/spotify-album-image-test.jpg")`,
            }}
          >
            <img
              src={require("assets/images/spotify-album-image-test.jpg")}
              alt="first artist from album"
              width="210px"
              height="210px"
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Typography variant="h2">
              <strong>My new playlist</strong>
            </Typography>
            <Typography variant="h5">50 songs</Typography>
          </div>
        </div>
        {/* Table header */}

        <Divider variant="fullWidth" />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div># Title</div>
            <div>Artist</div>
            <div>Time</div>
          </div>
          {tracks?.map((track) => (
            <TrackItem
              title={track.title}
              artist={track.artist}
              durationMs={track.durationMs}
              presentationImage={track.albumImages[2]}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};
