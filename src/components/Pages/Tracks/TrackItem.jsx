import Tooltip from "@mui/material/Tooltip";
import { colorBlackLighter, colorPurplePowder } from "assets/styles/colors";
import { Duration } from "luxon";

export const TrackItem = ({
  title,
  artist,
  durationMs,
  presentationImage,
  index = 0,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "3rem",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", width: "15rem", gap: "0.5rem" }}>
        <p
          style={{
            display: "inline-block",
            marginTop: "1rem",
            marginRight: "11px",
            width: "10px",
            color: "#5F5B5B",
          }}
        >
          <strong>{index}</strong>
        </p>
        <img
          src={presentationImage.url}
          alt="First artist from album"
          width="50px"
          height="50px"
          style={{ borderRadius: "5%", boxShadow: `0px 0px 5px 0px #1A1A1A` }}
        />
        <p
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "#6F6F6F", //#ACACAC
          }}
        >
          <Tooltip title={title}>
            <strong>{title}</strong>
          </Tooltip>
        </p>
      </div>
      <div
        style={{
          width: "10rem",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: "#6F6F6F",
        }}
      >
        <strong>{artist}</strong>
      </div>
      <div style={{ color: "#ACACAC" }}>
        <strong>{Duration.fromMillis(durationMs).toFormat("mm:ss")}</strong>
      </div>
    </div>
  );
};
