import React from "react";
import CardFeature from "./CardFeature";
import List from "./List";
import phone from "../images/phone.png";

const Features = () => {
  const allList = List.map((list) => (
    <CardFeature key={list.title} list={list} />
  ));

  // let scrollpos = window.scrollY; // window scroll position
  // let wh = window.innerHeight - 50; // as soon as element touches bottom with offset event starts
  // let element = document.querySelector(".feature"); //element

  // window.addEventListener("scroll", function () {
  //   if (scrollpos > element.offsetTop - wh) {
  //     element.classList.add("onScroll");
  //   }
  // });
  return (
    <div className="px-8 md:px-20 py-4 md:py-8 text-center ">
      <p className="font-extrabold text-2xl md:text-4xl ">Features</p>
      <div className="flex items-center py-4 md:py-8">
        <div className="w-full hidden md:block ">
          <img src={phone} alt="phone" className="m-auto" />
        </div>
        <div className="md:mt-10 flex flex-wrap justify-between w-full">
          {allList}
        </div>
      </div>
    </div>
  );
};

export default Features;
