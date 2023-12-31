import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";

interface NavInterface {
  showModal: () => void;
}

const Navigation: React.FC<NavInterface> = ({ showModal }) => {
  const navigate = useNavigate();
  return (
    <div className="navigation d-lg-flex d-none align-items-center justify-content-center">
      <NavLink className="a" to="/">
        ALL PRODUCTS
      </NavLink>
      <NavLink className="a" to="/about">
        ABOUT US
      </NavLink>
      <NavLink className="a" to="/contact">
        CONTACT US
      </NavLink>
      <NavLink className="a" to="/questions">
        QUESTIONS
      </NavLink>
      <NavLink className="a" to="/collections">
        COLLECTIONS
      </NavLink>
      <button onClick={() => navigate("/search")} className="searchButton">
        <img src={search} alt="search" />
      </button>
      <button onClick={() => showModal()} className="cartButton">
        <img src={bag} alt="bag" />
      </button>
    </div>
  );
};

export { Navigation };
