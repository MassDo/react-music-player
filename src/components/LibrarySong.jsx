const LibrarySong = ({
  id,
  songs,
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPLaying,
}) => {
  // Event Handler
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPLaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 1);
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
