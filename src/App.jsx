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
    <div
      className={`App ${libraryStatus ? "library-active" : ""}`}
      style={{
        background: `linear-gradient(-45deg, ${currentSong.color[0]}, ${currentSong.color[1]})`,
      }}
    >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        isPLaying={isPLaying}
        currentSong={currentSong}
      />
      <Player
        songs={songs}
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
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
