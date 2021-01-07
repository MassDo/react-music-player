import LibrarySong from "./LibrarySong";

const Library = ({
  libraryStatus,
  isPLaying,
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? "show-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPLaying={isPLaying}
            audioRef={audioRef}
            key={song.id}
            id={song.id}
            songs={songs}
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Library;
