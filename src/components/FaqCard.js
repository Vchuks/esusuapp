import React, { useState } from "react";
import plus from "../images/plus.svg";

const FaqCard = ({ list }) => {
  const [active, setActive] = useState(false);
  const { title, body } = list;
  const change = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="bg-slate-100  p-4 md:m-4 rounded-lg">
        <div className="flex items-center">
          <button onClick={change} className="w-full text-left">
            {title}
          </button>
          <span onClick={change}>
            <img src={plus} alt="plus" />
          </span>
        </div>
      </div>
      <div className="mt-2 bg-inherit px-4 mx-4">
        {active ? <p className="whitespace-pre-wrap pb-6">{body}</p> : null}
      </div>
    </>
  );
};

export default FaqCard;
