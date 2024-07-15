// updated code

import React, { useEffect, useState } from "react";
import SongsCard from "./SongsCard";
import { useSearchParams } from "react-router-dom";

const SongsItems = () => {
  const [songItems, setSongItems] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const CLIENT_ID = "00f7b0505d21491a9faea70880c8636c";
  const CLIENT_SECRET = "6e0b22fca0ac4b8f934d83d75aacb8fa";
  const query = searchParams.get("query") || "";

//  this is based on json data and local image and song
//   useEffect(() => {
//     fetch("/songs.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setsongitem(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching songs:", error);
//       });
//   }, []);

  // Fetch access token
  useEffect(() => {
    const fetchAccessToken = async () => {
      const authParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      };

      const result = await fetch(
        "https://accounts.spotify.com/api/token",
        authParameters
      );
      const data = await result.json();
      setAccessToken(data.access_token);
      // is me kuchh nhi hai
      // console.log("access token"+data.access_token);
    };

    fetchAccessToken();
  }, [CLIENT_ID, CLIENT_SECRET]);

  // Search and fetch artist albums and tracks
  useEffect(() => {
    const searchAndFetchAlbumsAndTracks = async () => {
      if (!accessToken || !query) return;

      const searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      try {
        // Search for artists and tracks
        const searchResponse = await fetch(
          `https://api.spotify.com/v1/search?q=${query}&type=artist,track`,
          searchParameters
        )
        const searchData = await searchResponse.json();
        // console.log("access artist name and data"+searchData); output is object
        const artists = searchData.artists.items;
        const tracks = searchData.tracks.items;

        console.log("Artists:", artists);
        console.log("Tracks:", tracks);

        // Combine artist albums and track data
        let combinedResults = [];

        for (const artist of artists) {
          const artistID = artist.id;

          // Fetch albums by the artist
          const albumsResponse = await fetch(
            `https://api.spotify.com/v1/artists/${artistID}/albums`,
            searchParameters
          ).then(response=>response.json()).then(data=>console.log(data))
          const albumsData = await albumsResponse.json();
          // console.log("acceess data by album"+ albumsData); out is object 
          const albums = albumsData.items.map((album) => ({
            image: album.images[0]?.url,
            songName: album.name,
            artistName: artist.name, 
            albumName: album.name,
          }));

          combinedResults = [...combinedResults, ...albums];
        }

        const tracksData = tracks.map((track) => ({
          image: track.album.images[0]?.url,
          songName: track.name,
          artistName: track.artists.map((artist) => artist.name).join(", "),
          albumName: track.album.name,
        }));

        combinedResults = [...combinedResults, ...tracksData];

        setSongItems(combinedResults);
      } catch (error) {
        console.error("Error fetching artist, albums, or tracks:", error);
      }
    };

    searchAndFetchAlbumsAndTracks();
  }, [accessToken, query]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {songItems.map((song, index) => (
        <SongsCard key={index} song={song} />
      ))}
    </div>
  );
};

export default SongsItems;
