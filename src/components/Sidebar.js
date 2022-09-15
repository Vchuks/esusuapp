import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDrop = () => {
    return setDropdown(!dropdown);
  };
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div className="w-auto block md:hidden justify-between text-white h-screen items-center absolute right-0 top-24 hero  p-8 pb-24">
      <NavHashLink
        smooth
        to="#top"
        style={navStyle}
        className="hover:text-2xl hover:text-blue-600  h-8 hover:text-opacity-70 block mb-4"
      >
        Home
      </NavHashLink>
      <NavHashLink
        smooth
        to="#feature"
        style={navStyle}
        className="hover:text-2xl hover:text-blue-600 h-8 hover:text-opacity-70 block mb-4"
      >
        Features
      </NavHashLink>
      <NavHashLink
        smooth
        to="#faq"
        style={navStyle}
        className="hover:text-2xl hover:text-blue-600 h-8 hover:text-opacity-70 block mb-4"
      >
        Faq's
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        style={navStyle}
        className="hover:text-2xl hover:text-blue-600 h-8 hover:text-opacity-70 block mb-4"
      >
        Contact Us
      </NavHashLink>
      <div className="relative">
        <button
          onClick={handleDrop}
          className="px-6 py-2 rounded-md bg-blue-900 text-slate-100 block "
        >
          Login
        </button>
        {dropdown ? (
          <div className="flex flex-col gap-y-2 py-4 px-10 absolute ">
            {/* to navigate to external link
            <a
                href="https://facebook.com"
                className="hover:text-2xl hover:text-opacity-70"
                target="_blank"
              >
                Customer
              </a> */}
            <NavLink
              to="#"
              style={navStyle}
              className="hover:text-2xl h-8 hover:text-opacity-70"
            >
              Customer
            </NavLink>
            <NavLink
              to="#"
              style={navStyle}
              className="hover:text-2xl h-8 hover:text-opacity-70"
            >
              Agent
            </NavLink>
            <NavLink
              to="#"
              style={navStyle}
              className="hover:text-2xl h-8 hover:text-opacity-70"
            >
              FSP
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
