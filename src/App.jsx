import { useState, useRef } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./util";

function App() {
  // State
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPLaying, setIsPLaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPLaying={isPLaying}
        setIsPLaying={setIsPLaying}
      />
      <Library
        libraryStatus={libraryStatus}
        isPLaying={isPLaying}
        audioRef={audioRef}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
