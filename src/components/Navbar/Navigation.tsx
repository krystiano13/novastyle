import React from 'react';
import { NavLink } from 'react-router-dom';

import bag from "../../assets/bag.svg";
import search from "../../assets/search.svg";

const Navigation = () => {
    return (
      <div className="navigation d-lg-flex d-none align-items-center justify-content-center">
        <NavLink className="a" to="/">
          ALL PRODUCTS
        </NavLink>
        <NavLink className="a" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="a" to="/">
          CONTACT US
        </NavLink>
        <NavLink className="a" to="/">
          QUESTIONS
        </NavLink>
        <NavLink className="a" to="/">
          COLLECTIONS
        </NavLink>
        <button className="searchButton">
          <img src={search} alt="search" />
        </button>
        <button className="cartButton">
          <img src={bag} alt="bag" />
        </button>
      </div>
    );
}

export { Navigation };