import React from "react";

const VideoSection = () => {
  return (
    <div className="md:flex gap-8 px-8 md:px-20 py-8 md:py-20">
      <div className="w-full md:w-11/12 h-60 md:h-auto mb-8 md:mb-0">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/8SPFqSjJtV0"
          title="Introducing esusu.online: Digital Thrift and Credit System for MSMEs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-full md:p-4 font-sans">
        <p className="font-bold md:font-normal text-2xl md:text-4xl text-center">
          Get Onboard
        </p>
        <p className="flex text-lg md:text-xl items-center gap-4 my-4">
          <span className="px-4 py-2 md:px-6 md:py-4 text-white text-lg rounded-full bg-blue-900 hover:bg-transparent hover:text-blue-900 border-2 border-blue-900">
            1
          </span>
          <span>Go to esusu.online</span>
        </p>
        <p className="flex text-lg md:text-xl items-center gap-4 my-4">
          <span className="px-4 py-2 md:px-6 md:py-4 text-white text-lg rounded-full bg-blue-900 hover:bg-transparent hover:text-blue-900 border-2 border-blue-900">
            2
          </span>
          <span>Login to your dashboard as a customer or an agent</span>
        </p>
        <p className="flex text-lg md:text-xl items-center gap-4 my-4">
          <span className="px-4 py-2 md:px-6 md:py-4 text-white text-lg rounded-full bg-blue-900 hover:bg-transparent hover:text-blue-900 border-2 border-blue-900">
            3
          </span>
          <span>Start accessing your plans</span>
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
