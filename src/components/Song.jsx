const Song = ({ libraryStatus, setLibraryStatus, isPLaying, currentSong }) => {
  // Event Handler
  const openedLibraryHandler = () =>
    libraryStatus ? setLibraryStatus(!libraryStatus) : "";

  // UI
  return (
    <div onClick={openedLibraryHandler} className="song-container">
      <img
        onClick={() => setLibraryStatus(!libraryStatus)}
        className={isPLaying ? "imageOff" : "imageOn"}
        alt={currentSong.name}
        src={currentSong.cover}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
