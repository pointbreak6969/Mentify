import React, { act, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../../assets/logo.png";
import "../../styles/navbar.css";
import useClickAway from "../../utils/useClickAway"
const Navbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const ref = useClickAway(() => {
    setActiveSidebar(false);
  });
  return (
    <>
      <div className="mobile-navbar md:hidden ">
        <div className="flex justify-between  p-2 ">
          <div>
            <img src={logo} alt="image" className="w-20" />
          </div>
          <div className="sidebar">
            <div
              className={
                activeSidebar ? "hidden" : "text-3xl font-bold cursor-pointer flex items-center"
              }
            >
              <IoMenu
                onClick={() => {
                  setActiveSidebar(true);
                }}
              />
            </div>

            <div
            ref={ref}
              className={
                activeSidebar
                  ? " h-screen bg-white sidebar-dropdown flex gap-5   "
                  : "hidden"
              }
            >
              <div>
                <IoIosCloseCircle
                  onClick={() => {
                    setActiveSidebar(false);
                  }}
                  className="text-4xl cursor-pointer flex items-center "
                />
              </div>
              <div className="sidebar-dropdown-items">
                <div className="list-none">
                  <li className="border-b-1 p-1 ">Signup</li>
                  <li className="border-b-1 p-1 ">Login</li>
                </div>
                <div className="list-none">
                  <li className="border-b-1 p-1 ">Home</li>
                  <li className="border-b-1 p-1 ">Books</li>
                  <li className="border-b-1 p-1 ">Professional Connection</li>
                  <li className="border-b-1 p-1 ">Conversations</li>
                  <li className="border-b-1 p-1 ">Contact Us</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-desktop hidden md:grid md:grid-cols-12 md:p-4 md:bg-cyan-700 md:text-white">
        <div className="col-span-2 flex items-center justify-center">
          <img src={logo} alt=""  className="w-20 xl:w-24 cursor-pointer "/>
        </div>
        <div className="col-span-8 list-none flex justify-center items-center  ">
          <li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer ">Home</li>
          <li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer">Library</li>
          <li className="px-2 text-md xl:px-4 xl:text-xl hover:underline cursor-pointer ">Professionals</li>
          <li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer">Conversations</li>
          <li className="px-2 text-md xl:px-4 xl:text-xl hover:underline cursor-pointer ">Contact Us</li>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button className="px-2 text-md xl:px-4 xl:text-xl hover:underline">Login</button>
          <button className="px-2 text-md xl:px-4 xl:text-xl hover:underline">Signup</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
