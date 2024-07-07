import React from "react";
import banner from "./images/banner.png";
const Rightbanner = () => {
  return (
    <div className="md:shrink-0 flex justify-center items-center mt-12">
      <img src={banner} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default Rightbanner;
