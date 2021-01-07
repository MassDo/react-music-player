const Song = ({ isPLaying, currentSong }) => {
  console.log(isPLaying);

  return (
    <div className="song-container">
      <img
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
