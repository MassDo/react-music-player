import { useState } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPLaying, setIsPLaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPLaying={isPLaying}
        setIsPLaying={setIsPLaying}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
