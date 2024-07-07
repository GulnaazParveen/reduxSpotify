import React, { useState, useRef } from "react";
import Rightbanner from "./Rightbanner";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const Songitem = ({ songContent }) => {
  const [isSongPlayed, setSongPlayed] = useState(false);
  const audioRef = useRef(new Audio(songContent.audio));

  const handleSongs = () => {
    if (isSongPlayed) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setSongPlayed(!isSongPlayed);
  };

  return (
    <div
      className="flex justify-center items-center pt-14"
      style={{ height: "450px" }}
    >
      <div
        className="flex justify-between items-center shadow-lg rounded-lg mr-20 relative"
        style={{
          width: "466px",
          height: "277px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow:
            "0 4px 8px 0 rgba(188, 15, 4, 0.2), 0 6px 20px 0 rgba(188, 15, 4, 0.8)",
        }}
      >
        <div className="songs absolute top-8 mx-10">
          <div className="song-image">
            <img
              src={songContent.image}
              alt={songContent.songName}
              className="h-32"
            />
          </div>
          <div className="song-content">
            <h3 className="mt-4 text-2xl text-black capitalize font-semibold">
              {songContent.songName}
            </h3>
            <p className="text-xl text-slate-600 capitalize font-medium">
              {songContent.artistName}
            </p>
          </div>
        </div>
        <div className="play-pause absolute bottom-6 right-4">
          <div
            className="flex justify-center items-center bg-green-600 rounded-full h-14 w-14"
            onClick={handleSongs}
          >
            {isSongPlayed ? (
              <PauseIcon className="text-black" style={{ fontSize: 40 }} />
            ) : (
              <PlayArrowIcon className="text-black" style={{ fontSize: 40 }} />
            )}
          </div>
        </div>
      </div>
      <Rightbanner />
    </div>
  );
};

export default Songitem;
