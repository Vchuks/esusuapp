import React from "react";

const CardFeature = ({ list }) => {
  const { title, content, image } = list;
  return (
    <div className="p-3 md:p-4 flex w-full md:w-5/6 shadow-xl sh rounded-lg my-4 md:my-6 items-center">
      <div className="w-20">
        <img src={image} alt="logo" width={50} height={30} />
      </div>
      <div className="w-full">
        <h2 className="font-extrabold text-xl md:text-2xl">{title}</h2>
        <p className="mt-4 font-sans leading-7 text-left">{content}</p>
      </div>
    </div>
  );
};

export default CardFeature;
