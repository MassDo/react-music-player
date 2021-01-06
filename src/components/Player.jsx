import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPLaying, setIsPLaying }) => {
  // Ref
  const audioRef = useRef(null);

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

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
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
          icon={faPlay}
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
