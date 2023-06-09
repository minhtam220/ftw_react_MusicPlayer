import "./App.css";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
//MUI
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
//children
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&:after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 200,
  top: "30%",
  right: "50%",
  position: "absolute",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function App() {
  const theme = useTheme();

  return (
    <MusicPlayerProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <Widget>
            <TrackList />
            <Controller />
          </Widget>
          <WallPaper />
        </Box>
      </ThemeProvider>
    </MusicPlayerProvider>
  );
}

export default App;
