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
  const mainIconColor = "#fff";

  const {
    trackList,
    playTrack,
    isPlaying,
    currentTrackIndex,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const handlePlay = () => {
    console.log(currentTrackIndex);

    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    }
  };

  return (
    <>
      <Typography
        sx={{ ml: 1, alignItems: "center" }}
        variant="caption"
        fontWeight={500}
      >
        {currentTrackIndex ? trackList[currentTrackIndex]["name"] : ""}
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
