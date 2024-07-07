import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
const Sidebar = () => {
  return (
    <div className="flex items-center relative w-48" >
      <div
        className="flex items-center flex-col  bg-slate-950 text-white fixed top-0"
        style={{ height: "100vh", width: "200px" }}
      >
        <div className="lg:flex lg:items-center top-9 left-9  my-3">
          <div className=" mr-3 w-9 ">
            <HomeIcon className="h-40 w-40 text-white" />
          </div>
          <p className="text-base text-white ">Home</p>
        </div>
        <div className="lg:flex lg:items-center top-9 left-9 ">
          <div className=" mr-3 w-8  ">
            <AddIcon className="h-40 w-40 text-white" />
          </div>
          <p className="text-base text-white ">Playlist</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
