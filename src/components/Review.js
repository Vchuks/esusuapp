import React from "react";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";

const Review = () => {
  const client = ClientList.map((list) => {
    return <ClientCard key={list.name} client={list} />;
  });
  return (
    <>
      <p className=" text-white text-2xl md:text-4xl text-center mb-4">
        Reviews from our clients
      </p>
      <div className="px-8 md:px-20 py-4 md:py-8 md:flex gap-6">{client}</div>
    </>
  );
};

export default Review;
