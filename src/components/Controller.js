//Controller
import useMusicPlayer from "../hooks/useMusicPlayer";
//UI
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import { useState } from "react";

const Controller = () => {
  const mainIconColor = "#fff";

  const {
    trackList,
    playTrack,
    togglePlay,
    isPlaying,
    currentTrackIndex,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const handlePlay = () => {
    playTrack(currentTrackIndex);
    console.log(isPlaying);
  };

  return (
    <>
      <Typography
        sx={{ ml: 1, alignItems: "center" }}
        variant="caption"
        fontWeight={500}
      >
        {trackList[currentTrackIndex]["name"]}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song">
          <FastRewindRounded
            fontSize="large"
            htmlColor={mainIconColor}
            onClick={() => playPreviousTrack()}
          />
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
        <IconButton aria-label="next song">
          <FastForwardRounded
            fontSize="large"
            htmlColor={mainIconColor}
            onClick={() => playNextTrack()}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default Controller;
