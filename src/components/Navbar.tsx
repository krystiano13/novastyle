import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container-fluid d-flex align-items-center justify-content-between">
      <div className="logo d-flex align-items-center justify-content-center">
        NS
      </div>
      <div className="navigation d-flex align-items-center justify-content-center">
        <NavLink className="a" to="/">
          ALL PRODUCTS
        </NavLink>
        <NavLink className="a" to="/">
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
        <button className="searchButton"></button>
        <button className="cartButton"></button>
      </div>
    </nav>
  );
};

export { Navbar };
