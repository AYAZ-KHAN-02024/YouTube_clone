import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchFeed from "./SearchFeed";


function Navbar() {
  //this is for hiding navbar, after click on any option 
  const [click, setClick] = useState(true);

  return (
    <>
      <nav className="w-screen fixed top-0 z-50 mb-4">
        <header className="w-full h-14  p-2 md:p-2 bg-[#99c4ff] flex justify-between  items-center shadow-md shadow-[#617ad4]">

          <img src="ytlogo.png" alt="logo" className="h-8 md:h-10 rounded-md" />

          <SearchFeed />


          {/* this div for all navbar buttons  */}
          <div
            className={`justify-center items-center ${click ? "hidden" : "flex"
              }  sm:flex md:text-sm  font-bold sm:flex-row flex-col mt-[250px] p-2 sm:h-full  rounded-b-lg w-[100vw] bg-[#99c4ff]  sm:w-auto sm:bg-[#99c4ff] text-xs sm:mt-0 sm:p-0 `}
          >
            <div className="m-3 ">
              <NavLink
                to="/"
                className="NavLink p-2 hover:border-b-2 hover:border-b-red-600"
                onClick={() => setClick(true)}
              >
                Home
              </NavLink>
            </div>

            <div className="m-3">
              <NavLink
                to="/savedVideo"
                className="NavLink p-2 text-center  hover:border-b-2 hover:border-b-red-600"
                onClick={() => setClick(true)}
              >
                Saved Videos
              </NavLink>
            </div>

            <div className="m-3">
              <NavLink
                to="/subscription"
                className="NavLink p-2 hover:border-b-2 hover:border-b-red-600"
                onClick={() => setClick(true)}
              >
                Subscription
              </NavLink>
            </div>

            <div className="m-3">
              <NavLink
                to="/login"
                className="NavLink p-2 hover:border-b-2 hover:border-b-red-600"
                onClick={() => setClick(true)}
              >
                <i className=" text-2xl fa-solid fa-circle-user"></i>
              </NavLink>
            </div>
          </div>

          {/* this is menu button, its visible when window size decrease */}
          <button onClick={() => setClick(!click)} className=" sm:hidden block">
            {click ? (<i className="text-xl fa-solid fa-bars"/>)
              : (<i className="text-xl fa-solid fa-x"/>)}
          </button>

        </header>
      </nav>


    </>
  );
}

export default Navbar;
