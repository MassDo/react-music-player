import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPLaying, setIsPLaying, audioRef }) => {
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
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleRight} />
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
