import React, { useEffect, useState } from "react";
import SongsCard from "./SongsCard";

const SongsItems = () => {
  const [songitem, setsongitem] = useState([]);

  useEffect(() => {
    fetch("/songs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setsongitem(data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 ">
      {songitem.map((song, index) => (
        <SongsCard key={index} song={song} />
      ))}
    </div>
  );
};

export default SongsItems;
