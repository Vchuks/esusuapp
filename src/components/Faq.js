import React from "react";
import FaqCard from "./FaqCard";
import Faqlist from "./Faqlist";

const Faq = () => {
  const faq = Faqlist.map((list) => {
    return <FaqCard key={list.title} list={list} />;
  });
  return (
    <div className="px-8 md:px-20 py-4 md:py-20 font-extrabold text-lg md:text-xl">
      <p className="text-center text-xl md:text-4xl p-8 md:px-0 md:pt-0 md:pb-4">
        Frequently Asked Questions
      </p>
      {faq}
    </div>
  );
};

export default Faq;
