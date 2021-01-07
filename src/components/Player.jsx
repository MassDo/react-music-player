import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  currentSong,
  setCurrentSong,
  isPLaying,
  setIsPLaying,
  audioRef,
}) => {
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Event Handler
  const playSongHandler = () => {
    // toogle the play/pause button
    isPLaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPLaying(!isPLaying);
  };
  const timeUpdateHandler = (e) => {
    // Update song state from audio html properties
    setSongInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };
  const getTime = (time) => {
    // Format time from sec to min : sec
    let minutes = Math.floor(time / 60);
    let seconds = ("0" + ~~(time % 60)).slice(-2); // ~~ for Math.floor
    return minutes + " : " + seconds;
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };
  const skipForward = () => {
    let currentIndex = songs.indexOf(currentSong);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPLaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 1);
    }
  };
  const skipBackward = () => {
    let currentIndex = songs.indexOf(currentSong);
    setCurrentSong(
      songs[currentIndex - 1 >= 0 ? currentIndex - 1 : songs.length - 1]
    );
    if (isPLaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 1);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={skipBackward}
          className="skip-forward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPLaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={skipForward}
          className="skip-back"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
