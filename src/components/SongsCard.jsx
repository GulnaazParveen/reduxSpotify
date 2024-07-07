
import React from "react";

const SongsCard = ({ song }) => {
  return (
    <div
      className="flex flex-col justify-start items-center shadow-lg p-4 rounded-lg"
      style={{
        height: "315px",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent background
        boxShadow:
          "0 4px 8px 0 rgba(188, 15, 4, 0.2), 0 6px 20px 0 rgba(188, 15, 4, 0.0.8)", // Custom box shadow
      }}
    >
      <div
        className="imagebox shrink-0 mb-4"
        style={{ height: "218px", width: "100%", objectFit: "cover" }}
      >
        <img
          src={song.image}
          alt={song.songName}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <h3 className="text-lg font-semibold">{song.songName}</h3>
      <p className="text-sm text-gray-600">{song.artistName}</p>
    </div>
  );
};

export default SongsCard;

