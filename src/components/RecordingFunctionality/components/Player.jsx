import { useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";

import { PlayArrow } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import { Fab } from "@mui/material";
import { Button } from "semantic-ui-react";

export const Player = ({ currentSrc }) => {
  const [playing, setPlaying] = useState(false);
  const player = useRef();
  const audiofunction = () => {
    if (playing) {
      player.current.audio.current.pause();
      setPlaying(false);
      return;
    }
    player.current.audio.current.play();
    setPlaying(true);
  };
  const stopPlay = () => {};
  return (
    <>
      <AudioPlayer
        autoPlay={false}
        src={currentSrc}
        onPlay={(e) => console.log({ playing: currentSrc })}
        onEnded={(e) => {console.log("ended");setPlaying(false)}}
        ref={player}
        style={{ display: "none" }}
      />
      {playing ? (
        <PauseIcon
          className="player-button"
          onClick={audiofunction}
          fontSize="large"
        />
      ) : (
        <PlayArrow
          className="player-button"
          onClick={audiofunction}
          fontSize="large"
        />
      )}
    </>
  );
};
