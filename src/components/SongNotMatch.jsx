import React from 'react'
import Rightbanner from './Rightbanner';

const SongNotMatch = ({ query }) => {
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
        <h1 className='text-4xl font-semibold capitalize '>🤔 {query} song is  not found</h1>
      </div>
      <Rightbanner/>
    </div>
  );
};

export default SongNotMatch
