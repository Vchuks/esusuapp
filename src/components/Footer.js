import React from "react";
import FootCard from "./FootCard";
import Footerlist from "./Footerlist";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import play from "../images/play.svg";

const Footer = () => {
  const foot = Footerlist.map((list) => {
    return <FootCard key={list.title} list={list} />;
  });
  return (
    <div className="px-8 md:px-20 py-8 md:py-20 md:flex justify-between gap-10 text-slate-100">
      <div className="text-lg md:w-2/4">
        <p className="text-2xl md:text-3xl mb-4 flex items-center gap-2">
          <span>
            <img src={logo} alt="logo" width={80} className="w-16 md:w-20" />
          </span>
          esusu.online
        </p>
        <p>Your easy Ajo contribution platform</p>
      </div>
      <div className="flex justify-between md:justify-around md:w-5/6 py-6 md:py-0">
        {foot}
      </div>
      <div className="lg:w-1/3">
        <p className=" text-xl mb-4">Download</p>
        <div className="button flex flex-wrap gap-4 mt-4">
          <div className="w-auto flex items-center md:gap-4 border-2 p-2">
            <img src={play} alt="playstore" />
            <div>
              <p>Available on</p>
              <Link to="#" className="md:text-lg">
                Play Store
              </Link>
            </div>
          </div>
          <div className="w-auto text-center mt-4 bg-slate-200 text-lg font-bold text-blue-900 p-3 md:p-4 rounded-full hover:bg-inherit hover:text-white hover:border-2">
            <Link to="#">Get started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
