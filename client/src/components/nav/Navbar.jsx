import React, { act, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../../assets/logo.png";
import "../../styles/navbar.css";
import useClickAway from "../../utils/useClickAway";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/context";
import { useContext } from "react";
import axios from "axios";
const Navbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const ref = useClickAway(() => {
    setActiveSidebar(false);
  });
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
   const handleLogout = async ()=>{ 
      try {
        await axios.post("http://localhost:5000/api/v1/user/logout",{}, {
          withCredentials: true,
        })
        localStorage.removeItem("username");
        localStorage.removeItem("age")
        localStorage.removeItem("email")
        setUser(null)
      } catch (error) {
        console.log("error while logging out", error)
      }
    }
  return (
    <>
      <div className="mobile-navbar md:hidden ">
        <div className="flex justify-between  p-2 ">
          <div>
            <img
              src={logo}
              alt="image"
              className="w-20 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="sidebar">
            <div
              className={
                activeSidebar
                  ? "hidden"
                  : "text-3xl font-bold cursor-pointer flex items-center"
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
                  ? " h-screen bg-white sidebar-dropdown flex gap-5 z-10  "
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
                  <Link to={"/"}><li className="border-b-1 p-1 ">Home</li></Link>
                  <Link to={"/library"}><li className="border-b-1 p-1 ">Books</li></Link>
                  <Link to={"/profesionals"}><li className="border-b-1 p-1 ">Professional Connection</li></Link>
                  <Link to={"/conversation"}><li className="border-b-1 p-1 ">Conversations</li></Link>
                  <Link to={"/contact"}><li className="border-b-1 p-1 ">Contact Us</li></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-desktop hidden md:grid md:grid-cols-12 md:p-4 md:bg-cyan-700 md:text-white z-[100]">
        <div className="col-span-2 flex items-center justify-center">
          <img src={logo} alt="" className="w-20 xl:w-24 cursor-pointer " />
        </div>
        <div className="col-span-8 list-none flex justify-center items-center  ">
          <Link to={"/"}><li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer ">
            Home 
          </li></Link>
          <Link to={"/library"}><li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer">
            Library
          </li></Link>
          <Link to={"/professional"}><li className="px-2 text-md xl:px-4 xl:text-xl hover:underline cursor-pointer ">
            Professionals
          </li></Link>
          <Link to={"/posts"}><li className="px-2 text-md xl:px-4 xl:text-xl hover:underline  cursor-pointer">
            Conversations
          </li></Link>
          <Link><li className="px-2 text-md xl:px-4 xl:text-xl hover:underline cursor-pointer ">
            Chat With AI
          </li></Link>
        </div>
        {/* If user is logged in, show the logout button */}
        {user ? (
          <div className="col-span-2 flex justify-center items-center">
            <div>
               <p> {user.fullname || user.user.fullname}</p>
            </div>
            <div className="px-2">
              <button
                onClick={() => {
                  handleLogout();
                }}
              >
                logout
              </button>
            </div>
          </div>
        ) : (
          <div className="col-span-2 flex justify-center items-center">
            <button
              className="px-2 text-md xl:px-4 xl:text-xl hover:underline"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className="px-2 text-md xl:px-4 xl:text-xl hover:underline"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
