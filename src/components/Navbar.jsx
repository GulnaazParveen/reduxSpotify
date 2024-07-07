import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Navbar.css"
import { useSearchParams } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [getvalue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    const value = event.target.value; 
    setInputValue(value);
    setSearchParams({ query: value });
  };




   useEffect(()=>{
     const handlescroll = () => {
       if (window.scroll > 50) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };

     window.addEventListener("scroll", handlescroll);

     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener("scroll", handlescroll);
     };
   },[])
  return (
    <div className={`flex-1 relative h-0 w-full ${scrolled ? 'visible' : ''}`}>
      <div
        className={`flex items-center justify-between h-20  w-10/12 fixed top-0 ${
          scrolled ? 'visible' : ''
        }`}
      >
        <div className="flex items-center bg-slate-700 text-white mx-8 top-6 h-12 w-80 px-4 rounded-3xl">
          <span>
            <SearchIcon className="h-48 w-48 text-gray-500 " />
          </span>
          <span>
            <input
              type="text"
              value={getvalue}
              placeholder="what do you want to play ?"
              className="outline-none bg-inherit"
              onChange={handleSearch}

            />
          </span>
        </div>
        <div className="flex justify-between items-center w-40 ">
          <div className="rounded-full bg-slate-700 h-12 w-12 flex items-center justify-center ">
            <NotificationsNoneIcon
              className="text-white"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="rounded-3xl bg-slate-700 h-10 w-20 flex items-center justify-center text-white text-base">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
