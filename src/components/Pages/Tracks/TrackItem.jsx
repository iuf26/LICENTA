import { Duration } from "luxon";

export const TrackItem = ({ title, artist, durationMs, presentationImage }) => {
  console.log({ title, artist });
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <img
          src={presentationImage.url}
          alt="First artist from album"
          width="60px"
          height="60px"
        />
        <p style={{ width: "10rem" }}>
          <strong>{title}</strong>
        </p>
      </div>
      <div>{artist}</div>
      <div>{Duration.fromMillis(durationMs).toFormat("mm:ss")}</div>
    </div>
  );
};
