//Controller
import useMusicPlayer from "../hooks/useMusicPlayer";
//UI
import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  PauseRounded,
  PlayArrowRounded,
  FastForwardRounded,
  FastRewindRounded,
} from "@mui/icons-material";

const Controller = () => {
  const mainIconColor = "#000000";

  const {
    trackList,
    playTrack,
    isPlaying,
    currentTrackIndex,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const handlePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  return (
    <>
      <Typography
        sx={{ ml: 1, alignItems: "center" }}
        variant="caption"
        fontWeight={500}
        fontSize="large"
      >
        {currentTrackIndex !== null
          ? trackList[currentTrackIndex]["name"]
          : "No track is playing"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton
          aria-label="previous song"
          onClick={() => playPreviousTrack()}
        >
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton onClick={() => handlePlay()}>
          {isPlaying ? (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          ) : (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          )}
        </IconButton>
        <IconButton aria-label="next song" onClick={() => playNextTrack()}>
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
};

export default Controller;
