import React, { useState } from "react";
import track1 from "../music/track1.mp3";
import track2 from "../music/track2.mp3";
import track3 from "../music/track3.mp3";

const MusicPlayerContext = React.createContext("");

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Ambient Classical",
      file: track1,
    },
    {
      name: "Relaxing",
      file: track2,
    },
    {
      name: "Smoke",
      file: track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
