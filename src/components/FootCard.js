import React from "react";
import { NavHashLink } from "react-router-hash-link";

const FootCard = ({ list }) => {
  const { title, content } = list;
  const eachCon = content.map((cont) => {
    return (
      <li key={cont.name}>
        <NavHashLink smooth to={`#${cont["link"]}`}>
          {cont["name"]}
        </NavHashLink>
      </li>
    );
  });

  return (
    <div>
      <div>
        <p className="text-xl mb-4">{title}</p>
        <ul className="md:text-lg">{eachCon}</ul>
      </div>
    </div>
  );
};

export default FootCard;
