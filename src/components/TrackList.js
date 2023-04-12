//Controller
import useMusicPlayer from "../hooks/useMusicPlayer";
import { useState } from "react";
//UI
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

const TrackList = () => {
  const { trackList, playTrack, togglePlay, isPlaying, currentTrackIndex } =
    useMusicPlayer();
  const handlePlay = (index) => {
    playTrack(index);
    console.log(isPlaying);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 1,
        }}
      >
        {trackList.map((track, index) => (
          <Box sx={{ mb: 1, width: "100%" }}>
            <IconButton
              onClick={() => handlePlay(index)}
              sx={{
                width: 30,
                height: 30,
                objectFit: "cover",
                overflow: "hidden",
                flexShrink: 0,
                borderRadius: 3,
                backgroundColor: "rgba(0,0,0,0.08)",
                "& > img": {
                  width: "100%",
                },
              }}
            >
              {index == currentTrackIndex ? (
                <PlayArrowRounded sx={{ fontSize: "1rem" }} />
              ) : (
                <PauseRounded sx={{ fontSize: "1rem" }} />
              )}
            </IconButton>
            <Typography sx={{ ml: 1 }} variant="caption" fontWeight={500}>
              {track["name"]}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TrackList;
