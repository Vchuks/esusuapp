import React, { useState } from "react";
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

  return (
    <div className="w-full bg-slate-100  py-4 px-8 md:px-20 flex justify-between items-center text-xl fixed z-10">
      <img src={logo} alt="esusu.online" width={80} className="w-16 md:w-20" />

      <div className="w-4/6 hidden md:flex justify-between items-center">
        <NavHashLink
          smooth
          to="#top"
          className=" hover:text-blue-600 hover:text-opacity-70"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="#feature"
          className=" hover:text-blue-600 hover:text-opacity-70"
        >
          Features
        </NavHashLink>
        <NavHashLink
          smooth
          to="#faq"
          className=" hover:text-blue-600 hover:text-opacity-70"
        >
          Faq's
        </NavHashLink>
        <NavHashLink
          smooth
          to="#contact"
          className=" hover:text-blue-600 hover:text-opacity-70"
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
              <a
                href="https://app.esusu.online"
                target="_blank"
                rel="noreferrer"
                className="hover:text-2xl hover:text-opacity-70 h-8"
              >
                Customer
              </a>
              <a
                href="https://app.esusu.online/agent"
                target="_blank"
                rel="noreferrer"
                className="hover:text-2xl hover:text-opacity-70 h-8"
              >
                Agent
              </a>
              <a
                href="https://app.esusu.online/fsp"
                target="_blank"
                rel="noreferrer"
                className="hover:text-2xl hover:text-opacity-70 h-8"
              >
                FSP
              </a>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="block md:hidden space-y-2 cursor-pointer relative"
        type="button"
        onClick={handleClick}
      >
        <span className="block w-7 h-1 bg-blue-600"></span>
        <span className="block w-7 h-1 bg-blue-600"></span>
        <span className="block w-7 h-1 bg-blue-600"></span>
      </div>
      {nav ? <Sidebar /> : null}
    </div>
  );
};

export default Navbar;
