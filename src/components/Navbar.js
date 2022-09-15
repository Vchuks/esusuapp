import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Sidebar from "./Sidebar";
import logo from "../images/logo.png";

// let menuB = document.getElementsByClassName("menubtn");
// menuB.addEventListener("click", function () {
//   let classList = document.getElementById("nav").classList;
//   classList.toggle("hidden");
//   classList.toggle("block");
// });
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    return setNav(!nav);
  };

  const handleDrop = () => {
    return setDropdown(!dropdown);
  };
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div className="w-full bg-slate-100  py-4 px-8 md:px-20 flex justify-between items-center text-xl fixed z-10">
      <img src={logo} alt="esusu.online" width={100} />

      <div className="w-4/6 hidden md:flex justify-between items-center">
        <NavHashLink
          smooth
          to="#top"
          style={navStyle}
          className="hover:text-2xl hover:text-blue-600 hover:text-opacity-70"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="#feature"
          style={navStyle}
          className="hover:text-2xl hover:text-blue-600 hover:text-opacity-70"
        >
          Features
        </NavHashLink>
        <NavHashLink
          smooth
          to="#faq"
          style={navStyle}
          className="hover:text-2xl hover:text-blue-600 hover:text-opacity-70"
        >
          Faq's
        </NavHashLink>
        <NavHashLink
          smooth
          to="#contact"
          style={navStyle}
          className="hover:text-2xl hover:text-blue-600 hover:text-opacity-70"
        >
          Contact Us
        </NavHashLink>
        <div className="relative">
          <button
            onClick={handleDrop}
            className="px-6 py-2 rounded-md bg-blue-900 text-slate-100"
          >
            Login
          </button>
          {dropdown ? (
            <div className="flex flex-col h-auto gap-y-3 py-7 px-2 w-screen absolute bg-slate-100 shadow-lg rounded-md">
              <NavLink
                to={{ pathname: "#" }}
                target="_blank"
                style={navStyle}
                className="hover:text-2xl hover:text-opacity-70"
              >
                {/* to link to an external page
                <a href="https://esusu.online" target="_blank">
                  loo
                </a> */}
                Customer
              </NavLink>
              <NavLink
                to="#"
                style={navStyle}
                className="hover:text-2xl hover:text-opacity-70"
              >
                Agent
              </NavLink>
              <NavLink
                to="#"
                style={navStyle}
                className="hover:text-2xl hover:text-opacity-70"
              >
                FSP
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="block md:hidden space-y-2 cursor-pointer relative"
        type="button"
        onClick={handleClick}
      >
        <span className="block w-8 h-1 bg-blue-600"></span>
        <span className="block w-8 h-1 bg-blue-600"></span>
        <span className="block w-8 h-1 bg-blue-600"></span>
      </div>
      {nav ? <Sidebar /> : null}
    </div>
  );
};

export default Navbar;
