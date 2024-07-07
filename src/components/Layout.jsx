import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Mainsongcontainer from './Mainsongcontainer';

const Layout = () => {
  return (
    <div
      className="lg:flex  lg:w-full  lg:h-full"
      style={{
        background:"#1bc0f4",
        // height: "100vh",
      }}
    >
      <Sidebar />
      <Mainsongcontainer />
    </div>
  );
}

export default Layout
