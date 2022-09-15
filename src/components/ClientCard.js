import React from "react";

const ClientCard = ({ client }) => {
  const { name, comment, image } = client;

  return (
    <div className="md:w-1/2  bg-slate-100 p-4 rounded-lg md:animate-movetoleft my-4 md:my-10">
      <div className="text-justify">{comment}</div>
      <div className="flex md:flex-wrap gap-4 mt-6 items-center">
        <img
          src={image}
          width={80}
          height={50}
          alt="clients"
          className="rounded-full rounded-tr-none"
        />
        <p className="font-bold text-blue-600">{name}</p>
      </div>
    </div>
  );
};

export default ClientCard;
