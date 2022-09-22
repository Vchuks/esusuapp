import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDrop = () => {
    return setDropdown(!dropdown);
  };
  return (
    <div className="w-auto block md:hidden justify-between text-white h-screen tall:overflow-y-scroll items-center absolute right-0 top-20 hero  p-8 pb-24">
      <NavHashLink
        smooth
        to="#top"
        className=" hover:text-blue-400  h-8 hover:text-opacity-70 block mb-4"
      >
        Home
      </NavHashLink>
      <NavHashLink
        smooth
        to="#feature"
        className=" hover:text-blue-400 h-8 hover:text-opacity-70 block mb-4"
      >
        Features
      </NavHashLink>
      <NavHashLink
        smooth
        to="#faq"
        className=" hover:text-blue-400 h-8 hover:text-opacity-70 block mb-4"
      >
        Faq's
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        className=" hover:text-blue-400 h-8 hover:text-opacity-70 block mb-4"
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
          <div className="flex flex-col gap-y-2 py-4 px-10 h-screen absolute">
            {/* to navigate to external link
            <a
                href="https://facebook.com"
                className="hover:text-2xl hover:text-opacity-70"
                target="_blank"
              >
                Customer
              </a> */}
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
  );
};

export default Sidebar;
