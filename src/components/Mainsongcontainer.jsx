import React, { useEffect, useState } from "react";
import Songitem from "./Songitem";
import SongsItems from "./SongsItems";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import SongNotMatch from "./SongNotMatch";

const Mainsongcontainer = () => {
  const [searchParams] = useSearchParams();
  const [songs, setSongs] = useState([]);

  const query = searchParams.get("query");

  useEffect(() => {
    fetch("/searchsongs.json")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredSongs = query
    ? songs.filter((song) =>
        song.songName.toLowerCase().includes(query.toLowerCase())
      )
    : <SongNotMatch query={query}/>

  return (
    <div className="flex flex-col items-center justify-center w-full ml-4">
      <Navbar />
      <div className="songitems-container ml-4 flex justify-center items-center">
        <div>
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <Songitem key={song.id} songContent={song} />
            ))
          ) : (
            <SongNotMatch query={query} />
          )}
          <SongsItems />
        </div>
      </div>
    </div>
  );
};

export default Mainsongcontainer;
